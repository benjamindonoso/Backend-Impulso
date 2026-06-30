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
    
    // Parseo seguro de familiaId
    let parsedFamiliaId = null;
    if (familiaId !== undefined && familiaId !== null && familiaId !== "" && familiaId !== "null") {
      parsedFamiliaId = parseInt(familiaId);
    }

    const cliente = await prisma.cliente.create({
      data: {
        rut, 
        nombre,
        apellidoP,
        apellidoM,
        telefono,
        email,
        familiaId: parsedFamiliaId,
        esTitular: esTitular === true || esTitular === 'true' // Manejo seguro de booleanos
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
    
    // Construir el objeto dinámicamente para evitar borrar datos accidentalmente
    const dataToUpdate = {};
    
    if (rut !== undefined) dataToUpdate.rut = rut;
    if (nombre !== undefined) dataToUpdate.nombre = nombre;
    if (apellidoP !== undefined) dataToUpdate.apellidoP = apellidoP;
    if (apellidoM !== undefined) dataToUpdate.apellidoM = apellidoM;
    if (telefono !== undefined) dataToUpdate.telefono = telefono;
    if (email !== undefined) dataToUpdate.email = email;
    if (activo !== undefined) dataToUpdate.activo = activo;

    if (esTitular !== undefined) {
       dataToUpdate.esTitular = (esTitular === true || esTitular === 'true');
    }

    if (familiaId !== undefined) {
      // Si el frontend envía vacío, null o la palabra "null", lo desvinculamos (Plan individual)
      if (familiaId === "" || familiaId === "null" || familiaId === null) {
        dataToUpdate.familiaId = null;
      } else {
        // De lo contrario, lo asignamos a la nueva familia
        dataToUpdate.familiaId = parseInt(familiaId);
      }
    }

    const clienteActualizado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
    });
    
    res.json(clienteActualizado);
  } catch (error) {
    console.error("Error en actualizarCliente:", error);
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