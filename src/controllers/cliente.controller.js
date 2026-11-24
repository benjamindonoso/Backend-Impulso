const prisma = require('../lib/prisma');

function normalizarOpcional(valor, { lowercase = false } = {}) {
  if (valor === undefined) return undefined;
  if (valor === null) return null;
  const texto = String(valor).trim();
  if (!texto) return null;
  return lowercase ? texto.toLowerCase() : texto;
}

function parsearFamiliaId(familiaId) {
  if (familiaId === undefined) return undefined;
  if (familiaId === null || familiaId === '' || familiaId === 'null') return null;
  const parsed = Number(familiaId);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : NaN;
}

const getClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: { familia: true },
      orderBy: { id: 'asc' },
    });
    res.json(clientes);
  } catch (error) {
    console.error('[GET CLIENTES ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

const crearCliente = async (req, res) => {
  try {
    const {
      rut,
      nombre,
      apellidoP,
      apellidoM,
      telefono,
      email,
      fechaNacimiento,
      activo,
      familiaId,
      esTitular,
    } = req.body || {};

    if (typeof nombre !== 'string' || !nombre.trim() || typeof apellidoP !== 'string' || !apellidoP.trim()) {
      return res.status(400).json({ error: 'Nombre y apellido paterno son obligatorios' });
    }

    const parsedFamiliaId = parsearFamiliaId(familiaId);
    if (Number.isNaN(parsedFamiliaId)) {
      return res.status(400).json({ error: 'ID de familia inválido' });
    }

    let parsedFecha = null;
    if (fechaNacimiento) {
      const f = new Date(fechaNacimiento);
      if (Number.isNaN(f.getTime())) {
        return res.status(400).json({ error: 'Fecha de nacimiento inválida' });
      }
      parsedFecha = f;
    }

    const cliente = await prisma.cliente.create({
      data: {
        rut: normalizarOpcional(rut),
        nombre: nombre.trim(),
        apellidoP: apellidoP.trim(),
        apellidoM: typeof apellidoM === 'string' ? apellidoM.trim() : '',
        telefono: normalizarOpcional(telefono),
        email: normalizarOpcional(email, { lowercase: true }),
        fechaNacimiento: parsedFecha,
        activo: activo === undefined ? true : Boolean(activo),
        familiaId: parsedFamiliaId ?? null,
        esTitular: esTitular === true || esTitular === 'true',
      },
    });
    res.status(201).json(cliente);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un cliente registrado con ese RUT' });
    }
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'La familia seleccionada no existe' });
    }
    console.error('[CREAR CLIENTE ERROR]:', error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

const actualizarCliente = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: 'ID de cliente inválido' });
    }

    const { rut, nombre, apellidoP, apellidoM, telefono, email, familiaId, esTitular, activo } = req.body || {};
    const dataToUpdate = {};

    if (rut !== undefined) dataToUpdate.rut = normalizarOpcional(rut);
    if (typeof nombre === 'string' && nombre.trim()) dataToUpdate.nombre = nombre.trim();
    if (typeof apellidoP === 'string' && apellidoP.trim()) dataToUpdate.apellidoP = apellidoP.trim();
    if (typeof apellidoM === 'string') dataToUpdate.apellidoM = apellidoM.trim();
    if (telefono !== undefined) dataToUpdate.telefono = normalizarOpcional(telefono);
    if (email !== undefined) dataToUpdate.email = normalizarOpcional(email, { lowercase: true });
    if (activo !== undefined) dataToUpdate.activo = Boolean(activo);
    if (esTitular !== undefined) dataToUpdate.esTitular = esTitular === true || esTitular === 'true';

    if (familiaId !== undefined) {
      const parsedFamiliaId = parsearFamiliaId(familiaId);
      if (Number.isNaN(parsedFamiliaId)) {
        return res.status(400).json({ error: 'ID de familia inválido' });
      }
      dataToUpdate.familiaId = parsedFamiliaId;
    }

    const clienteActualizado = await prisma.cliente.update({
      where: { id },
      data: dataToUpdate,
    });

    res.json(clienteActualizado);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Cliente no encontrado' });
    if (error.code === 'P2002') return res.status(400).json({ error: 'RUT duplicado en otro cliente' });
    console.error('Error en actualizarCliente:', error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

const actualizacionMasivaClientes = async (req, res) => {
  const { clientesActualizados } = req.body || {};
  if (!Array.isArray(clientesActualizados) || clientesActualizados.length === 0) {
    return res.status(400).json({ error: 'Se esperaba un arreglo de clientes para actualizar' });
  }

  try {
    const actualizaciones = clientesActualizados.map((cliente) => {
      const id = Number(cliente.id);
      if (!Number.isInteger(id) || id <= 0) {
        throw Object.assign(new Error('ID de cliente inválido en actualización masiva'), { statusCode: 400 });
      }

      const parsedFamiliaId = parsearFamiliaId(cliente.familiaId);
      if (Number.isNaN(parsedFamiliaId)) {
        throw Object.assign(new Error('ID de familia inválido en actualización masiva'), { statusCode: 400 });
      }

      return prisma.cliente.update({
        where: { id },
        data: {
          rut: normalizarOpcional(cliente.rut),
          nombre: typeof cliente.nombre === 'string' ? cliente.nombre.trim() : undefined,
          apellidoP: typeof cliente.apellidoP === 'string' ? cliente.apellidoP.trim() : undefined,
          apellidoM: typeof cliente.apellidoM === 'string' ? cliente.apellidoM.trim() : undefined,
          email: normalizarOpcional(cliente.email, { lowercase: true }),
          telefono: normalizarOpcional(cliente.telefono),
          activo: cliente.activo !== undefined ? Boolean(cliente.activo) : undefined,
          familiaId: parsedFamiliaId ?? null,
          esTitular: cliente.esTitular ?? false,
        },
      });
    });

    await prisma.$transaction(actualizaciones);
    res.json({ message: 'Cambios masivos guardados con éxito' });
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).json({ error: error.message });
    }
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Hay un RUT duplicado entre los clientes editados' });
    }
    console.error('Error en actualización masiva:', error);
    res.status(500).json({ error: 'Error al guardar los cambios masivos' });
  }
};

const eliminarCliente = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de cliente inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'CLIENTE', adminId: req.user.id },
      });
      await tx.cliente.delete({ where: { id } });
    });

    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Cliente no encontrado' });
    console.error('[ELIMINAR CLIENTE ERROR]:', error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};

module.exports = {
  getClientes,
  crearCliente,
  actualizarCliente,
  actualizacionMasivaClientes,
  eliminarCliente,
};
