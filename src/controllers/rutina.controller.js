const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener TODA la estructura de semanas y rutinas para un cliente
const getEstructuraEntrenamiento = async (req, res) => {
  const { clienteId } = req.params;
  try {
    const mesociclos = await prisma.mesociclo.findMany({
      where: { clienteId: Number(clienteId) },
      orderBy: { orden: 'asc' },
      include: {
        rutinas: {
          include: {
            ejercicios: {
              orderBy: { orden: 'asc' },
              include: { ejercicio: true }
            }
          }
        }
      }
    });
    res.json(mesociclos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la estructura de entrenamiento' });
  }
};

// Crear una nueva semana/mesociclo
const crearMesociclo = async (req, res) => {
  const { nombre, orden, clienteId } = req.body;
  try {
    const nuevoMesociclo = await prisma.mesociclo.create({
      data: { nombre, orden, clienteId: Number(clienteId) }
    });
    res.status(201).json(nuevoMesociclo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la semana' });
  }
};

// Crear rutina asociada a un Mesociclo
const crearRutina = async (req, res) => {
  const { nombre, diaSemana, descripcion, mesocicloId, listaEjercicios } = req.body;
  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        diaSemana,
        descripcion,
        mesocicloId: Number(mesocicloId),
        ejercicios: { create: listaEjercicios }
      }
    });
    res.status(201).json(nuevaRutina);
  } catch (error) {
    res.status(500).json({ error: 'Error al asignar la rutina' });
  }
};

// Actualizar rutina (mantiene la lógica anterior pero asegura integridad)
const actualizarRutina = async (req, res) => {
  const { id } = req.params;
  const { nombre, diaSemana, descripcion, listaEjercicios } = req.body;
  try {
    const rutinaActualizada = await prisma.$transaction(async (tx) => {
      const rutina = await tx.rutina.update({
        where: { id: Number(id) },
        data: { nombre, diaSemana, descripcion }
      });
      await tx.rutinaEjercicio.deleteMany({ where: { rutinaId: Number(id) } });
      if (listaEjercicios?.length > 0) {
        await tx.rutinaEjercicio.createMany({
          data: listaEjercicios.map(ej => ({ ...ej, rutinaId: Number(id) }))
        });
      }
      return rutina;
    });
    res.json({ message: 'Rutina actualizada', rutinaActualizada });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar rutina' });
  }
};

// Eliminar rutina
const eliminarRutina = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.rutina.delete({ where: { id: Number(id) } });
    res.json({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
};

module.exports = { 
  getEstructuraEntrenamiento, 
  crearMesociclo, 
  crearRutina,
  actualizarRutina,
  eliminarRutina 
};