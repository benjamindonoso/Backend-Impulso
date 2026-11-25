const express = require('express');
const { auth, requireRole, authKioscoOrAdmin } = require('../middlewares/auth');
const {
  getEstructuraEntrenamiento,
  crearMesociclo,
  crearRutina,
  actualizarRutina,
  eliminarRutina,
  eliminarMesociclo,
} = require('../controllers/rutina.controller');

const router = express.Router();

router.get('/cliente/:clienteId', authKioscoOrAdmin, getEstructuraEntrenamiento);
router.post('/mesociclo', auth, requireRole('ADMIN_GYM'), crearMesociclo);
router.delete('/mesociclo/:id', auth, requireRole('ADMIN_GYM'), eliminarMesociclo);
router.post('/', auth, requireRole('ADMIN_GYM'), crearRutina);
router.put('/:id', auth, requireRole('ADMIN_GYM'), actualizarRutina);
router.delete('/:id', auth, requireRole('ADMIN_GYM'), eliminarRutina);

module.exports = router;
