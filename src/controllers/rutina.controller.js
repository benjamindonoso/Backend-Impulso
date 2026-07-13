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
    console.error("[ERROR AL OBTENER ESTRUCTURA]:", error);
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
    console.error("[ERROR AL CREAR MESOCICLO]:", error);
    res.status(500).json({ error: 'Error al crear la semana' });
  }
};

const crearRutina = async (req, res) => {
  // Extraemos estrictamente los datos que acepta la tabla Rutina
  const { nombre, diaSemana, descripcion, mesocicloId, listaEjercicios } = req.body;
  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        diaSemana,
        descripcion,
        mesocicloId: Number(mesocicloId),
        ejercicios: { 
          create: listaEjercicios.map(ej => ({
            ejercicioId: Number(ej.ejercicioId),
            orden: Number(ej.orden),
            series: Number(ej.series),
            repeticiones: Number(ej.repeticiones),
            peso: Number(ej.peso),
            descansoSeg: Number(ej.descansoSeg),
            observaciones: ej.observaciones || ''
          })) 
        }
      }
    });
    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error("[ERROR AL CREAR RUTINA]:", error);
    res.status(500).json({ error: 'Error al crear la rutina' });
  }
};

const actualizarRutina = async (req, res) => {
  const { id } = req.params;
  const { nombre, diaSemana, descripcion, mesocicloId, listaEjercicios } = req.body;
  try {
    const rutinaActualizada = await prisma.$transaction(async (tx) => {
      const rutina = await tx.rutina.update({
        where: { id: Number(id) },
        data: { 
          nombre, 
          diaSemana, 
          descripcion,
          mesocicloId: Number(mesocicloId) 
        }
      });
      
      await tx.rutinaEjercicio.deleteMany({ where: { rutinaId: Number(id) } });
      
      if (listaEjercicios && listaEjercicios.length > 0) {
        await tx.rutinaEjercicio.createMany({
          data: listaEjercicios.map(ej => ({
            rutinaId: Number(id),
            ejercicioId: Number(ej.ejercicioId),
            orden: Number(ej.orden),
            series: Number(ej.series),
            repeticiones: Number(ej.repeticiones),
            peso: Number(ej.peso),
            descansoSeg: Number(ej.descansoSeg),
            observaciones: ej.observaciones || ''
          }))
        });
      }
      return rutina;
    });
    res.json({ message: 'Rutina actualizada', rutinaActualizada });
  } catch (error) {
    console.error("[ERROR AL ACTUALIZAR RUTINA]:", error);
    res.status(500).json({ error: 'Error al actualizar rutina' });
  }
};

const eliminarRutina = async (req, res) => {
  const { id } = req.params;
  try {
    // 1. Primero borramos los ejercicios que contiene la rutina
    await prisma.rutinaEjercicio.deleteMany({ where: { rutinaId: Number(id) } });
    
    // 2. Ahora sí podemos borrar la rutina libremente
    await prisma.rutina.delete({ where: { id: Number(id) } });
    
    res.json({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    console.error("[ERROR AL ELIMINAR RUTINA]:", error);
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