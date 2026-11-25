const express = require('express');
const { auth, requireRole } = require('../middlewares/auth');
const {
  getFamilias,
  crearFamilia,
  actualizarFamilia,
  eliminarFamilia,
} = require('../controllers/familia.controller');

const router = express.Router();

router.use(auth, requireRole('ADMIN_GYM'));

router.get('/', getFamilias);
router.post('/', crearFamilia);
router.put('/:id', actualizarFamilia);
router.delete('/:id', eliminarFamilia);

module.exports = router;
