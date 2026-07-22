const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { 
  getEstructuraEntrenamiento, 
  crearMesociclo, 
  crearRutina,
  actualizarRutina,
  eliminarRutina,
  eliminarMesociclo
} = require('../controllers/rutina.controller');

router.get('/cliente/:clienteId', getEstructuraEntrenamiento);
router.post('/mesociclo', auth, crearMesociclo);
router.delete('/mesociclo/:id', auth, eliminarMesociclo);
router.post('/', auth, crearRutina);
router.put('/:id', auth, actualizarRutina);
router.delete('/:id', auth, eliminarRutina);

module.exports = router;