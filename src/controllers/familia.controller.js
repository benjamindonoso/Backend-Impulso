const prisma = require('../lib/prisma');

const getFamilias = async (req, res) => {
  try {
    const familias = await prisma.familia.findMany({
      include: { integrantes: true },
      orderBy: { id: 'asc' },
    });
    res.json(familias);
  } catch (error) {
    console.error('[GET FAMILIAS ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener familias' });
  }
};

const crearFamilia = async (req, res) => {
  try {
    const { nombre, plan, activa } = req.body || {};
    if (typeof nombre !== 'string' || !nombre.trim()) {
      return res.status(400).json({ error: 'El nombre de la familia es obligatorio' });
    }

    const familia = await prisma.familia.create({
      data: {
        nombre: nombre.trim(),
        plan: typeof plan === 'string' && plan.trim() ? plan.trim() : null,
        activa: activa === undefined ? true : Boolean(activa),
      },
    });
    res.status(201).json(familia);
  } catch (error) {
    console.error('[CREAR FAMILIA ERROR]:', error);
    res.status(500).json({ error: 'Error al crear familia' });
  }
};

const actualizarFamilia = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: 'ID de familia inválido' });
    }

    const { nombre, plan, activa } = req.body || {};
    const dataToUpdate = {};
    if (typeof nombre === 'string' && nombre.trim()) dataToUpdate.nombre = nombre.trim();
    if (plan !== undefined) dataToUpdate.plan = typeof plan === 'string' && plan.trim() ? plan.trim() : null;
    if (activa !== undefined) dataToUpdate.activa = Boolean(activa);

    const familiaActualizada = await prisma.familia.update({
      where: { id },
      data: dataToUpdate,
    });
    res.json(familiaActualizada);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Familia no encontrada' });
    console.error('[ACTUALIZAR FAMILIA ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar la familia' });
  }
};

const eliminarFamilia = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de familia inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      if (req.user && req.user.id) {
        await tx.auditoria.create({
          data: { accion: 'ELIMINAR', entidad: 'FAMILIA', adminId: req.user.id },
        });
      }

      await tx.cliente.updateMany({
        where: { familiaId: id },
        data: { familiaId: null, esTitular: false },
      });

      await tx.familia.delete({ where: { id } });
    });

    res.json({ mensaje: 'Familia eliminada y clientes desvinculados correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Familia no encontrada' });
    console.error('[ELIMINAR FAMILIA ERROR]:', error);
    res.status(500).json({ error: 'Error al eliminar la familia' });
  }
};

module.exports = {
  getFamilias,
  crearFamilia,
  actualizarFamilia,
  eliminarFamilia,
};
