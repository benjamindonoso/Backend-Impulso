const prisma = require("../lib/prisma");

const getFamilias = async (req, res) => {
  try {
    const familias = await prisma.familia.findMany({
      include: {
        integrantes: true
      }
    });
    res.json(familias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener familias" });
  }
};

const crearFamilia = async (req, res) => {
  try {
    const { nombre, plan } = req.body;
    const familia = await prisma.familia.create({
      data: { nombre, plan }
    });
    res.status(201).json(familia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear familia" });
  }
};

const actualizarFamilia = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, plan, activa } = req.body;
    const familiaActualizada = await prisma.familia.update({
      where: { id: parseInt(id) },
      data: { nombre, plan, activa }
    });
    res.json(familiaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la familia" });
  }
};

const eliminarFamilia = async (req, res) => {
  try {
    const { id } = req.params;
    
    // 1. Registrar en Auditoría (si hay un admin logueado en req.user)
    if (req.user && req.user.id) {
      await prisma.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'FAMILIA', adminId: req.user.id }
      });
    }

    // 2. SOLUCIÓN AL BLOQUEO: Desvincular a todos los integrantes pasándolos a plan individual
    await prisma.cliente.updateMany({
      where: { familiaId: parseInt(id) },
      data: { familiaId: null, esTitular: false }
    });

    // 3. Ahora sí, eliminar la familia de forma segura
    await prisma.familia.delete({
      where: { id: parseInt(id) }
    });
    
    res.json({ mensaje: "Familia eliminada y clientes desvinculados correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la familia" });
  }
};

module.exports = {
  getFamilias,
  crearFamilia,
  actualizarFamilia,
  eliminarFamilia
};