const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { auth } = require('../middlewares/auth');


// Obtener todos los ejercicios del catálogo
router.get('/', async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicio.findMany({
      orderBy: { nombre: 'asc' } // Los ordenamos alfabéticamente
    });
    res.json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los ejercicios' });
  }
});

// Crear un nuevo ejercicio en el catálogo
router.post('/', async (req, res) => {
  const { nombre, descripcion, videoUrl } = req.body;

  try {
    const nuevoEjercicio = await prisma.ejercicio.create({
      data: { nombre, descripcion, videoUrl }
    });
    res.status(201).json(nuevoEjercicio);
  } catch (error) {
    console.error(error);
    // Si el error es por nombre duplicado (P2002 es el código de Prisma para unique constraint)
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un ejercicio con ese nombre' });
    }
    res.status(500).json({ error: 'Error al crear el ejercicio' });
  }
});

// Eliminar un ejercicio del catálogo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ejercicio.delete({ where: { id: Number(id) } });
    res.json({ message: 'Ejercicio eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el ejercicio' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const adminId = req.user.id; // Obtenemos el ID del admin logueado desde el token

  await prisma.auditoria.create({
    data: { accion: 'ELIMINAR', entidad: 'EJERCICIO', adminId }
  });

  await prisma.ejercicio.delete({ where: { id: Number(id) } });
  res.json({ message: 'Ejercicio eliminado' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, videoUrl } = req.body;

  try {
    const ejercicioActualizado = await prisma.ejercicio.update({
      where: { id: Number(id) },
      data: { nombre, descripcion, videoUrl }
    });
    res.json(ejercicioActualizado);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe otro ejercicio con ese nombre' });
    }
    res.status(500).json({ error: 'Error al actualizar el ejercicio' });
  }
});

module.exports = router;