const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. Obtener los nombres para el buscador
router.get('/directorio', async (req, res) => {
  try {
    const individuos = await prisma.cliente.findMany({
      where: { familiaId: null, activo: true },
      select: { id: true, nombre: true, apellidoP: true }
    });

    const familias = await prisma.familia.findMany({
      where: { activa: true },
      include: {
        integrantes: {
          select: { nombre: true, apellidoP: true }
        }
      }
    });

    const individuosFormateados = individuos.map(i => ({
      id: i.id,
      nombre: `${i.nombre} ${i.apellidoP}`
    }));

    const familiasFormateadas = familias.map(f => ({
      id: f.id,
      nombre: f.nombre,
      integrantes: f.integrantes.map(i => `${i.nombre} ${i.apellidoP}`)
    }));

    res.json({ individuos: individuosFormateados, familias: familiasFormateadas });
  } catch (error) {
    res.status(500).json({ error: "Error al cargar el directorio del kiosco" });
  }
});

// 2. Validar el PIN
router.post('/validar', async (req, res) => {
  const { id, tipo, pin } = req.body;

  try {
    let rutEnBaseDeDatos = null;

    if (tipo === 'individual') {
      const cliente = await prisma.cliente.findUnique({ where: { id } });
      if (!cliente || !cliente.rut) return res.status(404).json({ error: 'Cliente sin RUT registrado' });
      rutEnBaseDeDatos = cliente.rut;
    } 
    else if (tipo === 'familia') {
      const familia = await prisma.familia.findUnique({
        where: { id },
        include: { integrantes: { where: { esTitular: true } } }
      });
      
      if (!familia || familia.integrantes.length === 0 || !familia.integrantes[0].rut) {
        return res.status(404).json({ error: 'La familia no tiene un titular con RUT válido' });
      }
      rutEnBaseDeDatos = familia.integrantes[0].rut;
    }

    // LÓGICA MATEMÁTICA DEL PIN
    const rutLimpio = rutEnBaseDeDatos.replace(/[^0-9kK]/g, ''); 
    const cuerpoRut = rutLimpio.slice(0, -1);
    const pinReal = cuerpoRut.slice(-4);

    if (pin === pinReal) {
      res.json({ success: true, mensaje: 'Acceso concedido' });
    } else {
      res.status(401).json({ success: false, error: 'PIN incorrecto' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;