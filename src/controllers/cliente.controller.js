const prisma = require("../lib/prisma");

const getClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: {
        familia: true
      }
    });
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

const crearCliente = async (req, res) => {
  try {
    const { rut, nombre, apellidoP, apellidoM, telefono, email, familiaId, esTitular } = req.body;
    const cliente = await prisma.cliente.create({
      data: {
        rut, 
        nombre,
        apellidoP,
        apellidoM,
        telefono,
        email,
        familiaId,
        esTitular
      }
    });
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear cliente" });
  }
};

const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { rut, nombre, apellidoP, apellidoM, telefono, email, familiaId, esTitular, activo } = req.body;
    const clienteActualizado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: {
        rut,
        nombre,
        apellidoP,
        apellidoM,
        telefono,
        email,
        familiaId: familiaId ? parseInt(familiaId) : null,
        esTitular,
        activo,
      },
    });
    res.json(clienteActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
};

const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteDesactivado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: { activo: false }, 
    });
    res.json({ mensaje: "Cliente desactivado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al desactivar el cliente" });
  }
};

module.exports = {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};