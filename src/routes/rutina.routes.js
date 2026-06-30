const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { auth } = require('../middlewares/auth');

// Obtener todas las rutinas de UN CLIENTE ESPECÍFICO (Para el Kiosco y el Dashboard)
router.get('/cliente/:clienteId', async (req, res) => {
  const { clienteId } = req.params;

  try {
    const rutinas = await prisma.rutina.findMany({
      where: { 
        clienteId: Number(clienteId),
        activa: true 
      },
      include: {
        ejercicios: {
          orderBy: { orden: 'asc' }, 
          include: {
            ejercicio: true 
          }
        }
      }
    });
    res.json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las rutinas' });
  }
});

// Crear una nueva Rutina con todos sus ejercicios de golpe (Nested Write)
router.post('/', auth, async (req, res) => {
  const { nombre, diaSemana, descripcion, clienteId, listaEjercicios } = req.body;
  // listaEjercicios debe ser un array de objetos: [{ ejercicioId, orden, series, repeticiones, peso, descansoSeg, observaciones }]

  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        diaSemana,
        descripcion,
        clienteId: Number(clienteId),
        ejercicios: {
          create: listaEjercicios // Prisma automáticamente inserta todo esto en la tabla RutinaEjercicio
        }
      },
      include: { ejercicios: true }
    });

    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al asignar la rutina' });
  }
});

// Eliminar una rutina completa (Gracias al onDelete: Cascade de tu schema, también borrará la tabla intermedia)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.rutina.delete({ where: { id: Number(id) } });
    res.json({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
});

// PUT: Actualizar una rutina existente (Borra los ejercicios anteriores y guarda los nuevos de golpe)
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { nombre, diaSemana, descripcion, listaEjercicios } = req.body;

  try {
    // Usamos una transacción para asegurar que todo ocurra conjuntamente sin fallas intermedias
    const rutinaActualizada = await prisma.$transaction(async (tx) => {
      
      // 1. Actualizar los datos básicos de la rutina (Nombre, día)
      const rutina = await tx.rutina.update({
        where: { id: Number(id) },
        data: { nombre, diaSemana, descripcion }
      });

      // 2. Eliminar de la tabla intermedia todos los ejercicios antiguos asociados a esta rutina
      await tx.rutinaEjercicio.deleteMany({
        where: { rutinaId: Number(id) }
      });

      // 3. Insertar la nueva lista de ejercicios modificados en el lienzo
      if (listaEjercicios && listaEjercicios.length > 0) {
        await tx.rutinaEjercicio.createMany({
          data: listaEjercicios.map(ej => ({
            rutinaId: Number(id),
            ejercicioId: ej.ejercicioId,
            orden: ej.orden,
            series: ej.series,
            repeticiones: ej.repeticiones,
            peso: ej.peso,
            descansoSeg: ej.descansoSeg
          }))
        });
      }

      return rutina;
    });

    res.json({ message: 'Rutina evolucionada con éxito', rutinaActualizada });
  } catch (error) {
    console.error("Error al actualizar rutina:", error);
    res.status(500).json({ error: 'Error al modificar la rutina del cliente' });
  }
});

module.exports = router;