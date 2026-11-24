const prisma = require('../lib/prisma');

function mapearEjerciciosRutina(listaEjercicios) {
  if (!Array.isArray(listaEjercicios) || listaEjercicios.length === 0) {
    return null;
  }

  return listaEjercicios.map((ej, idx) => ({
    ejercicioId: Number(ej.ejercicioId),
    orden: Number.isInteger(Number(ej.orden)) ? Number(ej.orden) : idx + 1,
    series: Math.max(1, Number(ej.series) || 1),
    repeticiones: Math.max(1, Number(ej.repeticiones) || 1),
    peso: ej.peso !== undefined && ej.peso !== null ? Number(ej.peso) : null,
    descansoSeg: ej.descansoSeg !== undefined && ej.descansoSeg !== null ? Number(ej.descansoSeg) : null,
    observaciones: typeof ej.observaciones === 'string' && ej.observaciones.trim() ? ej.observaciones.trim() : null,
  }));
}

const getEstructuraEntrenamiento = async (req, res) => {
  const clienteId = Number(req.params.clienteId);
  if (!Number.isInteger(clienteId) || clienteId <= 0) {
    return res.status(400).json({ error: 'ID de cliente inválido' });
  }

  try {
    const mesociclos = await prisma.mesociclo.findMany({
      where: { clienteId },
      orderBy: { orden: 'asc' },
      include: {
        rutinas: {
          orderBy: { id: 'asc' },
          include: {
            ejercicios: {
              orderBy: { orden: 'asc' },
              include: { ejercicio: true },
            },
          },
        },
      },
    });
    res.json(mesociclos);
  } catch (error) {
    console.error('[ERROR AL OBTENER ESTRUCTURA]:', error);
    res.status(500).json({ error: 'Error al obtener la estructura de entrenamiento' });
  }
};

const crearMesociclo = async (req, res) => {
  const { nombre, orden, clienteId } = req.body || {};
  const parsedClienteId = Number(clienteId);
  const parsedOrden = Number(orden);

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre de la semana es obligatorio' });
  }
  if (!Number.isInteger(parsedClienteId) || parsedClienteId <= 0) {
    return res.status(400).json({ error: 'ID de cliente inválido' });
  }

  try {
    const nuevoMesociclo = await prisma.mesociclo.create({
      data: {
        nombre: nombre.trim(),
        orden: Number.isInteger(parsedOrden) && parsedOrden > 0 ? parsedOrden : 1,
        clienteId: parsedClienteId,
      },
    });
    res.status(201).json(nuevoMesociclo);
  } catch (error) {
    if (error.code === 'P2003') return res.status(404).json({ error: 'Cliente no encontrado' });
    console.error('[ERROR AL CREAR MESOCICLO]:', error);
    res.status(500).json({ error: 'Error al crear la semana' });
  }
};

const crearRutina = async (req, res) => {
  const { nombre, diaSemana, descripcion, mesocicloId, clienteId, listaEjercicios } = req.body || {};
  const parsedMesoId = Number(mesocicloId);
  const parsedClienteId = Number(clienteId);
  const ejerciciosMapeados = mapearEjerciciosRutina(listaEjercicios);

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre de la rutina es obligatorio' });
  }
  if (!Number.isInteger(parsedMesoId) || !Number.isInteger(parsedClienteId)) {
    return res.status(400).json({ error: 'Mesociclo o cliente inválido' });
  }
  if (!ejerciciosMapeados) {
    return res.status(400).json({ error: 'Debes incluir al menos un ejercicio' });
  }

  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre: nombre.trim(),
        diaSemana: typeof diaSemana === 'string' ? diaSemana.trim() : null,
        descripcion: typeof descripcion === 'string' && descripcion.trim() ? descripcion.trim() : null,
        mesocicloId: parsedMesoId,
        clienteId: parsedClienteId,
        ejercicios: {
          create: ejerciciosMapeados,
        },
      },
    });
    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error('[ERROR AL CREAR RUTINA]:', error);
    res.status(500).json({ error: 'Error al crear la rutina' });
  }
};

const actualizarRutina = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de rutina inválido' });
  }

  const { nombre, diaSemana, descripcion, mesocicloId, clienteId, listaEjercicios } = req.body || {};
  const parsedMesoId = Number(mesocicloId);
  const parsedClienteId = Number(clienteId);
  const ejerciciosMapeados = mapearEjerciciosRutina(listaEjercicios);

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre de la rutina es obligatorio' });
  }
  if (!Number.isInteger(parsedMesoId) || !Number.isInteger(parsedClienteId)) {
    return res.status(400).json({ error: 'Mesociclo o cliente inválido' });
  }

  try {
    const rutinaActualizada = await prisma.$transaction(async (tx) => {
      const rutina = await tx.rutina.update({
        where: { id },
        data: {
          nombre: nombre.trim(),
          diaSemana: typeof diaSemana === 'string' ? diaSemana.trim() : null,
          descripcion: typeof descripcion === 'string' && descripcion.trim() ? descripcion.trim() : null,
          mesocicloId: parsedMesoId,
          clienteId: parsedClienteId,
        },
      });

      await tx.rutinaEjercicio.deleteMany({ where: { rutinaId: id } });

      if (ejerciciosMapeados && ejerciciosMapeados.length > 0) {
        await tx.rutinaEjercicio.createMany({
          data: ejerciciosMapeados.map((ej) => ({
            rutinaId: id,
            ...ej,
          })),
        });
      }
      return rutina;
    });
    res.json({ message: 'Rutina actualizada', rutinaActualizada });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Rutina no encontrada' });
    console.error('[ERROR AL ACTUALIZAR RUTINA]:', error);
    res.status(500).json({ error: 'Error al actualizar rutina' });
  }
};

const eliminarRutina = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de rutina inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'RUTINA', adminId: req.user.id },
      });
      await tx.rutina.delete({ where: { id } });
    });
    res.json({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Rutina no encontrada' });
    console.error('[ERROR AL ELIMINAR RUTINA]:', error);
    res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
};

const eliminarMesociclo = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de semana inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'MESOCICLO', adminId: req.user.id },
      });
      await tx.mesociclo.delete({ where: { id } });
    });
    res.json({ message: 'Semana eliminada correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Semana no encontrada' });
    console.error('[ERROR AL ELIMINAR SEMANA]:', error);
    res.status(500).json({ error: 'Error al eliminar la semana' });
  }
};

module.exports = {
  getEstructuraEntrenamiento,
  crearMesociclo,
  crearRutina,
  actualizarRutina,
  eliminarRutina,
  eliminarMesociclo,
};
