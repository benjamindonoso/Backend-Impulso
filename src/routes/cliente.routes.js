const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { auth } = require('../middlewares/auth'); // ¿Está bien escrita la ruta?

const {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} = require("../controllers/cliente.controller");


const router = express.Router();  // ✅ Esto debe crear una función

// PUT: Actualización masiva de clientes (Tipo Excel)
router.put('/bulk', async (req, res) => {
  const { clientesActualizados } = req.body;

  try {
    const actualizaciones = clientesActualizados.map((cliente) => {
      return prisma.cliente.update({
        where: { id: cliente.id },
        data: {
          nombre: cliente.nombre,
          apellidoP: cliente.apellidoP,
          email: cliente.email,
          telefono: cliente.telefono,
          activo: cliente.activo,
          familiaId: cliente.familiaId !== undefined && cliente.familiaId !== '' ? parseInt(cliente.familiaId) : null,
          esTitular: cliente.esTitular ?? false,
        }
      });
    });

    await prisma.$transaction(actualizaciones);
    res.json({ message: 'Cambios masivos guardados con éxito' });
  } catch (error) {
    console.error("Error en actualización masiva:", error);
    res.status(500).json({ error: 'Error al guardar los cambios masivos' });
  }
});


router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const adminId = req.user.id; // Obtenemos el ID del admin logueado desde el token

  await prisma.auditoria.create({
    data: { accion: 'ELIMINAR', entidad: 'CLIENTE', adminId }
  });

  await prisma.cliente.delete({ where: { id: Number(id) } });
  res.json({ message: 'Cliente eliminado' });
});



router.get("/", getClientes);
router.post("/", crearCliente);
router.put("/:id", actualizarCliente);
router.delete("/:id", eliminarCliente);

module.exports = router;  // ✅ Debe exportar la función router

