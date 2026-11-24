const express = require('express');
const bcrypt = require('bcryptjs');
const prisma = require('../lib/prisma');
const { auth } = require('../middlewares/auth');

const router = express.Router();

// Todas las rutas administrativas requieren token válido
router.use(auth);

// GET: Listar todos los administradores
router.get('/', async (req, res) => {
  try {
    const admins = await prisma.administrador.findMany({
      select: { id: true, nombre: true, email: true, createdAt: true },
      orderBy: { id: 'asc' },
    });
    res.json(admins);
  } catch (error) {
    console.error('[GET ADMINS ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener administradores' });
  }
});

// POST: Crear nuevo administrador
router.post('/crear', async (req, res) => {
  const { nombre, email, password } = req.body || {};

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Email no válido' });
  }
  if (typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    const nuevoAdmin = await prisma.$transaction(async (tx) => {
      const creado = await tx.administrador.create({
        data: {
          nombre: nombre.trim(),
          email: email.trim().toLowerCase(),
          passwordHash,
        },
        select: { id: true, nombre: true, email: true },
      });

      await tx.auditoria.create({
        data: { accion: 'CREAR', entidad: 'ADMINISTRADOR', adminId: req.user.id },
      });

      return creado;
    });

    res.status(201).json({ message: 'Administrador creado con éxito', admin: nuevoAdmin });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un administrador con ese email' });
    }
    console.error('[CREAR ADMIN ERROR]:', error);
    res.status(500).json({ error: 'No se pudo crear el administrador' });
  }
});

// PUT: Actualizar administrador
router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de administrador inválido' });
  }

  const { nombre, email } = req.body || {};
  const dataToUpdate = {};
  if (typeof nombre === 'string' && nombre.trim()) dataToUpdate.nombre = nombre.trim();
  if (typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    dataToUpdate.email = email.trim().toLowerCase();
  }

  if (Object.keys(dataToUpdate).length === 0) {
    return res.status(400).json({ error: 'No hay campos válidos para actualizar' });
  }

  try {
    const adminActualizado = await prisma.administrador.update({
      where: { id },
      data: dataToUpdate,
      select: { id: true, nombre: true, email: true },
    });
    res.json(adminActualizado);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Administrador no encontrado' });
    if (error.code === 'P2002') return res.status(400).json({ error: 'Email duplicado' });
    console.error('[UPDATE ADMIN ERROR]:', error);
    res.status(400).json({ error: 'No se pudo actualizar el administrador' });
  }
});

// DELETE: Eliminar administrador
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de administrador inválido' });
  }

  if (id === req.user.id) {
    return res.status(400).json({ error: 'No puedes eliminar tu propia cuenta mientras tienes la sesión activa.' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'ADMINISTRADOR', adminId: req.user.id },
      });
      await tx.administrador.delete({ where: { id } });
    });

    res.json({ message: 'Administrador eliminado correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Administrador no encontrado' });
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'No se puede eliminar un administrador con registros de auditoría asociados.' });
    }
    console.error('[DELETE ADMIN ERROR]:', error);
    res.status(400).json({ error: 'No se pudo eliminar el administrador' });
  }
});

// GET: Obtener el historial de auditoría
router.get('/auditoria', async (req, res) => {
  try {
    const logs = await prisma.auditoria.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      include: {
        admin: {
          select: { nombre: true, email: true },
        },
      },
    });
    res.json(logs);
  } catch (error) {
    console.error('Error al obtener auditoría:', error);
    res.status(500).json({ error: 'Error al obtener los registros de auditoría' });
  }
});

module.exports = router;
