const express = require('express');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const prisma = require('../lib/prisma');
const { JWT_SECRET } = require('../middlewares/auth');

const router = express.Router();

const pinLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 12,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos de PIN incorrectos. Espera unos minutos.' },
});

// 1. Obtener los nombres para el buscador del kiosco (solo datos públicos mínimos)
router.get('/directorio', async (req, res) => {
  try {
    const individuos = await prisma.cliente.findMany({
      where: { familiaId: null, activo: true },
      select: { id: true, nombre: true, apellidoP: true },
      orderBy: [{ nombre: 'asc' }, { apellidoP: 'asc' }],
    });

    const familias = await prisma.familia.findMany({
      where: { activa: true },
      include: {
        integrantes: {
          where: { activo: true },
          select: { id: true, nombre: true, apellidoP: true },
          orderBy: [{ nombre: 'asc' }],
        },
      },
      orderBy: { nombre: 'asc' },
    });

    const individuosFormateados = individuos.map((i) => ({
      id: i.id,
      nombre: `${i.nombre} ${i.apellidoP}`,
    }));

    const familiasFormateadas = familias.map((f) => ({
      id: f.id,
      nombre: f.nombre,
      integrantes: f.integrantes.map((i) => ({
        id: i.id,
        nombre: `${i.nombre} ${i.apellidoP}`,
      })),
    }));

    res.json({ individuos: individuosFormateados, familias: familiasFormateadas });
  } catch (error) {
    console.error('[KIOSCO DIRECTORIO ERROR]:', error);
    res.status(500).json({ error: 'Error al cargar el directorio del kiosco' });
  }
});

// 2. Validar el PIN y emitir token acotado de sesión kiosco
router.post('/validar', pinLimiter, async (req, res) => {
  const { id, tipo, pin } = req.body || {};

  const parsedId = Number(id);
  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    return res.status(400).json({ success: false, error: 'Perfil inválido' });
  }
  if (tipo !== 'individual' && tipo !== 'familia') {
    return res.status(400).json({ success: false, error: 'Tipo de ingreso inválido' });
  }
  if (typeof pin !== 'string' || !/^\d{4}$/.test(pin)) {
    return res.status(400).json({ success: false, error: 'El PIN debe tener 4 dígitos' });
  }

  try {
    let rutEnBaseDeDatos = null;
    let allowedIds = [];

    if (tipo === 'individual') {
      const cliente = await prisma.cliente.findUnique({ where: { id: parsedId } });
      if (!cliente || !cliente.activo || !cliente.rut) {
        return res.status(404).json({ success: false, error: 'Cliente no disponible o sin RUT registrado' });
      }
      rutEnBaseDeDatos = cliente.rut;
      allowedIds = [cliente.id];
    } else {
      const familia = await prisma.familia.findUnique({
        where: { id: parsedId },
        include: {
          integrantes: {
            where: { activo: true },
            select: { id: true, rut: true, esTitular: true },
          },
        },
      });

      const titular = familia?.integrantes.find((i) => i.esTitular && i.rut);
      if (!familia || !familia.activa || !titular) {
        return res.status(404).json({ success: false, error: 'La familia no tiene un titular activo con RUT válido' });
      }
      rutEnBaseDeDatos = titular.rut;
      allowedIds = familia.integrantes.map((i) => i.id);
    }

    const rutLimpio = rutEnBaseDeDatos.replace(/[^0-9kK]/g, '');
    const cuerpoRut = rutLimpio.slice(0, -1);
    if (cuerpoRut.length < 4) {
      return res.status(400).json({ success: false, error: 'RUT registrado con formato inválido' });
    }
    const pinReal = cuerpoRut.slice(-4);

    if (pin !== pinReal) {
      return res.status(401).json({ success: false, error: 'PIN incorrecto' });
    }

    const kioscoToken = jwt.sign(
      { scope: 'kiosco', tipo, id: parsedId, allowedIds },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    return res.json({ success: true, mensaje: 'Acceso concedido', kioscoToken });
  } catch (error) {
    console.error('[KIOSCO VALIDAR ERROR]:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
