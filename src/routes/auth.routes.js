const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { JWT_SECRET } = require('../middlewares/auth');
const prisma = new PrismaClient();



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await prisma.administrador.findUnique({ where: { email } });
    if (!admin) return res.status(400).json({ error: 'Credenciales inválidas' });

    const validPassword = await bcrypt.compare(password, admin.passwordHash);
    if (!validPassword) return res.status(400).json({ error: 'Credenciales inválidas' });

    // Crear el token que usaremos para proteger el resto de las rutas
    const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: '8h' });
    
    res.json({ token, admin: { id: admin.id, nombre: admin.nombre } });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;