const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { 
  getEstructuraEntrenamiento, 
  crearMesociclo, 
  crearRutina,
  actualizarRutina,
  eliminarRutina
} = require('../controllers/rutina.controller');

// Obtener todas las semanas y rutinas de un cliente
router.get('/cliente/:clienteId', getEstructuraEntrenamiento);

// Crear nueva semana (Ej: "Semana 2")
router.post('/mesociclo', auth, crearMesociclo);

// Crear rutina dentro de una semana específica
router.post('/', auth, crearRutina);

// Actualizar y Eliminar
router.put('/:id', auth, actualizarRutina);
router.delete('/:id', auth, eliminarRutina);

module.exports = router;