const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const { auth } = require('../middlewares/auth');
const prisma = new PrismaClient();

// GET: Listar todos los administradores
router.get('/', auth, async (req, res) => {
  try {
    const admins = await prisma.administrador.findMany({
      select: { id: true, nombre: true, email: true } // No enviamos el passwordHash por seguridad
    });
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener administradores' });
  }
});

// POST: Crear nuevo administrador
router.post('/crear', auth, async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.administrador.create({
      data: { nombre, email, passwordHash }
    });
    res.status(201).json({ message: 'Administrador creado con éxito' });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el administrador (¿email duplicado?)' });
  }
});

// PUT: Actualizar administrador
router.put('/:id', auth, async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const adminActualizado = await prisma.administrador.update({
      where: { id: Number(req.params.id) },
      data: { nombre, email }
    });
    res.json(adminActualizado);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo actualizar el administrador' });
  }
});

// DELETE: Eliminar administrador
router.delete('/:id', auth, async (req, res) => {
  try {
    await prisma.administrador.delete({
      where: { id: Number(req.params.id) }
    });
    res.json({ message: 'Administrador eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo eliminar el administrador' });
  }
});

// GET: Obtener el historial de auditoría (Registro de acciones)
router.get('/auditoria', auth, async (req, res) => {
  try {
    const logs = await prisma.auditoria.findMany({
      orderBy: { createdAt: 'desc' }, // Ordenar: los más recientes primero
      include: {
        admin: {
          select: { nombre: true, email: true } // Traemos el nombre del administrador
        }
      }
    });
    res.json(logs);
  } catch (error) {
    console.error("Error al obtener auditoría:", error);
    res.status(500).json({ error: 'Error al obtener los registros de auditoría' });
  }
});

module.exports = router;