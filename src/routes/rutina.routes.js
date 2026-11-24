const express = require('express');
const { auth, authKioscoOrAdmin } = require('../middlewares/auth');
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
router.post('/mesociclo', auth, crearMesociclo);
router.delete('/mesociclo/:id', auth, eliminarMesociclo);
router.post('/', auth, crearRutina);
router.put('/:id', auth, actualizarRutina);
router.delete('/:id', auth, eliminarRutina);

module.exports = router;
