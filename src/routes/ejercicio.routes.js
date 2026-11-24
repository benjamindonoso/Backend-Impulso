const express = require('express');
const prisma = require('../lib/prisma');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.use(auth);

function validarVideoUrl(videoUrl) {
  if (videoUrl === undefined || videoUrl === null) return null;
  const trimmed = String(videoUrl).trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return undefined;
    }
    return trimmed;
  } catch {
    return undefined;
  }
}

// Obtener todos los ejercicios del catálogo
router.get('/', async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicio.findMany({
      orderBy: { nombre: 'asc' },
    });
    res.json(ejercicios);
  } catch (error) {
    console.error('[GET EJERCICIOS ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener los ejercicios' });
  }
});

// Crear un nuevo ejercicio en el catálogo
router.post('/', async (req, res) => {
  const { nombre, descripcion, videoUrl } = req.body || {};

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre del ejercicio es obligatorio' });
  }

  const urlSegura = validarVideoUrl(videoUrl);
  if (urlSegura === undefined) {
    return res.status(400).json({ error: 'El enlace de video debe ser una URL http o https válida' });
  }

  try {
    const nuevoEjercicio = await prisma.ejercicio.create({
      data: {
        nombre: nombre.trim(),
        descripcion: typeof descripcion === 'string' && descripcion.trim() ? descripcion.trim() : null,
        videoUrl: urlSegura,
      },
    });
    res.status(201).json(nuevoEjercicio);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un ejercicio con ese nombre' });
    }
    console.error('[CREAR EJERCICIO ERROR]:', error);
    res.status(500).json({ error: 'Error al crear el ejercicio' });
  }
});

// Actualizar un ejercicio del catálogo
router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de ejercicio inválido' });
  }

  const { nombre, descripcion, videoUrl } = req.body || {};
  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre del ejercicio es obligatorio' });
  }

  const urlSegura = validarVideoUrl(videoUrl);
  if (urlSegura === undefined) {
    return res.status(400).json({ error: 'El enlace de video debe ser una URL http o https válida' });
  }

  try {
    const ejercicioActualizado = await prisma.ejercicio.update({
      where: { id },
      data: {
        nombre: nombre.trim(),
        descripcion: typeof descripcion === 'string' && descripcion.trim() ? descripcion.trim() : null,
        videoUrl: urlSegura,
      },
    });
    res.json(ejercicioActualizado);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Ejercicio no encontrado' });
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe otro ejercicio con ese nombre' });
    }
    console.error('[UPDATE EJERCICIO ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar el ejercicio' });
  }
});

// Eliminar un ejercicio del catálogo (con auditoría)
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de ejercicio inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'EJERCICIO', adminId: req.user.id },
      });
      await tx.ejercicio.delete({ where: { id } });
    });

    res.json({ message: 'Ejercicio eliminado correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Ejercicio no encontrado' });
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'No puedes eliminar este ejercicio porque está asignado en una o más rutinas.' });
    }
    console.error('[DELETE EJERCICIO ERROR]:', error);
    res.status(500).json({ error: 'Error al eliminar el ejercicio' });
  }
});

module.exports = router;
