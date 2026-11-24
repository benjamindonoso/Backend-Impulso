const express = require('express');
const { auth } = require('../middlewares/auth');
const {
  getClientes,
  crearCliente,
  actualizarCliente,
  actualizacionMasivaClientes,
  eliminarCliente,
} = require('../controllers/cliente.controller');

const router = express.Router();

router.use(auth);

router.put('/bulk', actualizacionMasivaClientes);
router.get('/', getClientes);
router.post('/', crearCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;
