const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { auth } = require('../middlewares/auth'); // ¿Está bien escrita la ruta?

const {
  getFamilias,
  crearFamilia,
  actualizarFamilia,
  eliminarFamilia
} = require("../controllers/familia.controller");

const router = express.Router();  // ✅ Esto debe crear una función

router.get("/", getFamilias);
router.post("/", crearFamilia);
router.put("/:id", actualizarFamilia);
router.delete("/:id", eliminarFamilia);


router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const adminId = req.user.id; // Obtenemos el ID del admin logueado desde el token

  await prisma.auditoria.create({
    data: { accion: 'ELIMINAR', entidad: 'FAMILIA', adminId }
  });

  await prisma.familia.delete({ where: { id: Number(id) } });
  res.json({ message: 'Familia eliminada' });
});


module.exports = router;  // ✅ Debe exportar la función router