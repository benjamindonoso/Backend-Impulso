const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

const crearRutina = async (req, res) => {
  const { nombre, diaSemana, descripcion, mesocicloId, clienteId, listaEjercicios } = req.body; 
  
  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        diaSemana,
        descripcion,
        mesocicloId: Number(mesocicloId),
        clienteId: Number(clienteId), // 2. AÑADIMOS ESTA LÍNEA CLAVE
        ejercicios: { create: listaEjercicios }
      }
    });
    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error("[ERROR AL CREAR RUTINA]:", error); 
    res.status(500).json({ error: 'Error al asignar la rutina' });
  }
};

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