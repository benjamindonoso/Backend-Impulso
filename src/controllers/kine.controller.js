const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');
const { JWT_SECRET } = require('../middlewares/auth');

const ESTADOS_TRATAMIENTO = new Set(['EN_TRATAMIENTO', 'ALTA', 'PAUSADO']);
const TIPOS_EVALUACION = new Set(['INICIAL', 'REEVALUACION', 'ALTA']);
const ESTADOS_ASISTENCIA = new Set(['ASISTIO', 'INASISTENCIA', 'REPROGRAMADA']);

function normalizarTextoOpcional(valor, { lowercase = false } = {}) {
  if (valor === undefined) return undefined;
  if (valor === null) return null;
  const texto = String(valor).trim();
  if (!texto) return null;
  return lowercase ? texto.toLowerCase() : texto;
}

function validarEva(valor) {
  if (valor === undefined || valor === null || valor === '') return null;
  const n = Number(valor);
  if (!Number.isInteger(n) || n < 0 || n > 10) return undefined;
  return n;
}

function validarVideoUrl(videoUrl) {
  if (videoUrl === undefined || videoUrl === null) return null;
  const trimmed = String(videoUrl).trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
    return trimmed;
  } catch {
    return undefined;
  }
}

function parsearFechaOpcional(fecha) {
  if (fecha === undefined) return undefined;
  if (fecha === null || fecha === '') return null;
  const d = new Date(fecha);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function mapearEjerciciosKine(listaEjercicios) {
  if (!Array.isArray(listaEjercicios) || listaEjercicios.length === 0) return null;
  return listaEjercicios.map((ej, idx) => ({
    ejercicioKineId: Number(ej.ejercicioKineId),
    orden: Number.isInteger(Number(ej.orden)) ? Number(ej.orden) : idx + 1,
    series: Math.max(1, Number(ej.series) || 1),
    repeticiones: Math.max(1, Number(ej.repeticiones) || 1),
    duracionSeg: ej.duracionSeg !== undefined && ej.duracionSeg !== null && ej.duracionSeg !== '' ? Number(ej.duracionSeg) : null,
    peso: normalizarTextoOpcional(ej.peso) ?? null,
    descansoSeg: ej.descansoSeg !== undefined && ej.descansoSeg !== null && ej.descansoSeg !== '' ? Number(ej.descansoSeg) : null,
    frecuencia: normalizarTextoOpcional(ej.frecuencia) ?? null,
    observaciones: normalizarTextoOpcional(ej.observaciones) ?? null,
  }));
}

// =======================================================
// 1. AUTENTICACIÓN KINESIOLOGÍA
// =======================================================
const loginKine = async (req, res) => {
  const { email, password } = req.body || {};
  if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password) {
    return res.status(400).json({ error: 'Correo y contraseña requeridos' });
  }

  try {
    const profesional = await prisma.administrador.findUnique({
      where: { email: email.trim().toLowerCase() },
    });
    if (!profesional) return res.status(401).json({ error: 'Credenciales inválidas' });

    const validPassword = await bcrypt.compare(password, profesional.passwordHash);
    if (!validPassword) return res.status(401).json({ error: 'Credenciales inválidas' });

    const rol = profesional.rol || 'ADMIN_GYM';
    if (rol !== 'KINESIOLOGO' && rol !== 'SUPERADMIN') {
      return res.status(403).json({ error: 'Esta cuenta no tiene permisos de Kinesiología.' });
    }

    const token = jwt.sign({ id: profesional.id, rol }, JWT_SECRET, { expiresIn: '8h' });

    res.json({
      token,
      profesional: {
        id: profesional.id,
        nombre: profesional.nombre,
        email: profesional.email,
        rol,
        especialidad: profesional.especialidad,
        registroProfesional: profesional.registroProfesional,
      },
    });
  } catch (error) {
    console.error('[KINE LOGIN ERROR]:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

const getProfesionales = async (req, res) => {
  try {
    const profesionales = await prisma.administrador.findMany({
      where: { rol: { in: ['KINESIOLOGO', 'SUPERADMIN'] } },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        especialidad: true,
        registroProfesional: true,
        createdAt: true,
      },
      orderBy: { id: 'asc' },
    });
    res.json(profesionales);
  } catch (error) {
    console.error('[GET PROFESIONALES KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener profesionales' });
  }
};

const crearProfesional = async (req, res) => {
  const { nombre, email, password, especialidad, registroProfesional } = req.body || {};

  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Email no válido' });
  }
  if (typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    const creado = await prisma.$transaction(async (tx) => {
      const prof = await tx.administrador.create({
        data: {
          nombre: nombre.trim(),
          email: email.trim().toLowerCase(),
          passwordHash,
          rol: 'KINESIOLOGO',
          especialidad: normalizarTextoOpcional(especialidad) ?? null,
          registroProfesional: normalizarTextoOpcional(registroProfesional) ?? null,
        },
        select: {
          id: true,
          nombre: true,
          email: true,
          rol: true,
          especialidad: true,
          registroProfesional: true,
        },
      });

      await tx.auditoria.create({
        data: { accion: 'CREAR', entidad: 'KINESIOLOGO', adminId: req.user.id },
      });

      return prof;
    });

    res.status(201).json({ message: 'Kinesiólogo creado con éxito', profesional: creado });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe una cuenta registrada con ese correo' });
    }
    console.error('[CREAR PROFESIONAL KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al crear profesional' });
  }
};

// =======================================================
// 2. PORTAL DEL PACIENTE (SOLO EJERCICIOS, SIN DATOS CLÍNICOS)
// =======================================================
const getDirectorioPortal = async (req, res) => {
  try {
    const pacientes = await prisma.pacienteKine.findMany({
      where: { activo: true },
      select: { id: true, nombre: true, apellidoP: true },
      orderBy: [{ nombre: 'asc' }, { apellidoP: 'asc' }],
    });

    res.json({
      pacientes: pacientes.map((p) => ({
        id: p.id,
        nombre: `${p.nombre} ${p.apellidoP}`,
      })),
    });
  } catch (error) {
    console.error('[KINE PORTAL DIRECTORIO ERROR]:', error);
    res.status(500).json({ error: 'Error al cargar el directorio de pacientes' });
  }
};

const validarPinPortal = async (req, res) => {
  const { id, pin } = req.body || {};
  const pacienteId = Number(id);

  if (!Number.isInteger(pacienteId) || pacienteId <= 0) {
    return res.status(400).json({ success: false, error: 'Paciente inválido' });
  }
  if (typeof pin !== 'string' || !/^\d{4}$/.test(pin)) {
    return res.status(400).json({ success: false, error: 'El PIN debe tener 4 dígitos' });
  }

  try {
    const paciente = await prisma.pacienteKine.findUnique({
      where: { id: pacienteId },
      select: { id: true, nombre: true, apellidoP: true, rut: true, activo: true },
    });

    if (!paciente || !paciente.activo || !paciente.rut) {
      return res.status(404).json({ success: false, error: 'Paciente no disponible o sin RUT registrado' });
    }

    const rutLimpio = paciente.rut.replace(/[^0-9kK]/g, '');
    const cuerpoRut = rutLimpio.slice(0, -1);
    if (cuerpoRut.length < 4) {
      return res.status(400).json({ success: false, error: 'RUT registrado con formato inválido' });
    }

    const pinReal = cuerpoRut.slice(-4);
    if (pin !== pinReal) {
      return res.status(401).json({ success: false, error: 'PIN incorrecto' });
    }

    const kinePortalToken = jwt.sign(
      { scope: 'kine_portal', pacienteId: paciente.id },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      success: true,
      mensaje: 'Acceso concedido',
      kinePortalToken,
      paciente: { id: paciente.id, nombre: `${paciente.nombre} ${paciente.apellidoP}` },
    });
  } catch (error) {
    console.error('[KINE PORTAL VALIDAR ERROR]:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getRutinasPortalPaciente = async (req, res) => {
  const pacienteId = Number(req.params.pacienteId);
  if (!Number.isInteger(pacienteId) || pacienteId <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  try {
    // Solo expone pautas activas y sus ejercicios; nunca diagnósticos, antecedentes ni evoluciones.
    const rutinas = await prisma.rutinaKine.findMany({
      where: { pacienteId, activa: true },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        nombre: true,
        fase: true,
        frecuenciaSemana: true,
        indicacionesGenerales: true,
        dolorMaximoTolerable: true,
        createdAt: true,
        ejercicios: {
          orderBy: { orden: 'asc' },
          select: {
            id: true,
            orden: true,
            series: true,
            repeticiones: true,
            duracionSeg: true,
            peso: true,
            descansoSeg: true,
            frecuencia: true,
            observaciones: true,
            ejercicioKine: {
              select: {
                id: true,
                nombre: true,
                zonaCorporal: true,
                categoria: true,
                descripcion: true,
                indicacionesClinicas: true,
                videoUrl: true,
              },
            },
          },
        },
      },
    });

    res.json(rutinas);
  } catch (error) {
    console.error('[KINE PORTAL RUTINAS ERROR]:', error);
    res.status(500).json({ error: 'Error al cargar las pautas de ejercicios' });
  }
};

// =======================================================
// 3. RESUMEN CLÍNICO & PACIENTES
// =======================================================
const getResumenClinico = async (req, res) => {
  try {
    const inicioMes = new Date();
    inicioMes.setDate(1);
    inicioMes.setHours(0, 0, 0, 0);

    const [totalPacientes, enTratamiento, altas, sesionesMes, ultimasEvoluciones] = await Promise.all([
      prisma.pacienteKine.count({ where: { activo: true } }),
      prisma.pacienteKine.count({ where: { activo: true, estadoTratamiento: 'EN_TRATAMIENTO' } }),
      prisma.pacienteKine.count({ where: { activo: true, estadoTratamiento: 'ALTA' } }),
      prisma.evolucionKine.count({ where: { fecha: { gte: inicioMes }, asistencia: 'ASISTIO' } }),
      prisma.evolucionKine.findMany({
        take: 6,
        orderBy: { fecha: 'desc' },
        include: {
          paciente: { select: { id: true, nombre: true, apellidoP: true } },
          kinesiologo: { select: { nombre: true } },
        },
      }),
    ]);

    res.json({
      totalPacientes,
      enTratamiento,
      altas,
      sesionesMes,
      ultimasEvoluciones,
    });
  } catch (error) {
    console.error('[KINE RESUMEN ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener resumen clínico' });
  }
};

const getPacientes = async (req, res) => {
  const { estado, q, incluirInactivos } = req.query;
  const where = {};

  if (incluirInactivos !== 'true') where.activo = true;
  if (estado && ESTADOS_TRATAMIENTO.has(estado)) where.estadoTratamiento = estado;
  if (typeof q === 'string' && q.trim()) {
    const term = q.trim();
    where.OR = [
      { nombre: { contains: term, mode: 'insensitive' } },
      { apellidoP: { contains: term, mode: 'insensitive' } },
      { apellidoM: { contains: term, mode: 'insensitive' } },
      { rut: { contains: term, mode: 'insensitive' } },
      { diagnosticoMedico: { contains: term, mode: 'insensitive' } },
    ];
  }

  try {
    const pacientes = await prisma.pacienteKine.findMany({
      where,
      orderBy: [{ activo: 'desc' }, { updatedAt: 'desc' }],
      include: {
        _count: {
          select: {
            evaluaciones: true,
            evoluciones: true,
            rutinasKine: { where: { activa: true } },
          },
        },
      },
    });
    res.json(pacientes);
  } catch (error) {
    console.error('[GET PACIENTES KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
};

const getFichaPaciente = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  try {
    const paciente = await prisma.pacienteKine.findUnique({
      where: { id },
      include: {
        evaluaciones: {
          orderBy: { fecha: 'desc' },
          include: {
            kinesiologo: { select: { id: true, nombre: true, especialidad: true, registroProfesional: true } },
          },
        },
        evoluciones: {
          orderBy: [{ fecha: 'desc' }, { id: 'desc' }],
          include: {
            kinesiologo: { select: { id: true, nombre: true } },
          },
        },
        rutinasKine: {
          orderBy: [{ activa: 'desc' }, { createdAt: 'desc' }],
          include: {
            ejercicios: {
              orderBy: { orden: 'asc' },
              include: { ejercicioKine: true },
            },
          },
        },
      },
    });

    if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });

    // Serie cronológica ascendente de dolor EVA para gráfico de progreso
    const serieEva = [...paciente.evoluciones]
      .reverse()
      .filter((ev) => ev.evaPre !== null || ev.evaPost !== null)
      .map((ev) => ({
        id: ev.id,
        fecha: ev.fecha,
        numeroSesion: ev.numeroSesion,
        evaPre: ev.evaPre,
        evaPost: ev.evaPost,
      }));

    res.json({ ...paciente, serieEva });
  } catch (error) {
    console.error('[GET FICHA PACIENTE ERROR]:', error);
    res.status(500).json({ error: 'Error al cargar ficha clínica' });
  }
};

const crearPaciente = async (req, res) => {
  const {
    rut,
    nombre,
    apellidoP,
    apellidoM,
    fechaNacimiento,
    telefono,
    email,
    prevision,
    ocupacion,
    medicoDerivante,
    diagnosticoMedico,
    motivoConsulta,
    antecedentesMorbidos,
    estadoTratamiento,
  } = req.body || {};

  if (typeof nombre !== 'string' || !nombre.trim() || typeof apellidoP !== 'string' || !apellidoP.trim()) {
    return res.status(400).json({ error: 'Nombre y apellido paterno son obligatorios' });
  }

  const parsedFecha = parsearFechaOpcional(fechaNacimiento);
  if (fechaNacimiento && parsedFecha === undefined) {
    return res.status(400).json({ error: 'Fecha de nacimiento inválida' });
  }

  const estado = estadoTratamiento && ESTADOS_TRATAMIENTO.has(estadoTratamiento)
    ? estadoTratamiento
    : 'EN_TRATAMIENTO';

  try {
    const paciente = await prisma.$transaction(async (tx) => {
      const creado = await tx.pacienteKine.create({
        data: {
          rut: normalizarTextoOpcional(rut) ?? null,
          nombre: nombre.trim(),
          apellidoP: apellidoP.trim(),
          apellidoM: typeof apellidoM === 'string' ? apellidoM.trim() : '',
          fechaNacimiento: parsedFecha ?? null,
          telefono: normalizarTextoOpcional(telefono) ?? null,
          email: normalizarTextoOpcional(email, { lowercase: true }) ?? null,
          prevision: normalizarTextoOpcional(prevision) ?? null,
          ocupacion: normalizarTextoOpcional(ocupacion) ?? null,
          medicoDerivante: normalizarTextoOpcional(medicoDerivante) ?? null,
          diagnosticoMedico: normalizarTextoOpcional(diagnosticoMedico) ?? null,
          motivoConsulta: normalizarTextoOpcional(motivoConsulta) ?? null,
          antecedentesMorbidos: normalizarTextoOpcional(antecedentesMorbidos) ?? null,
          estadoTratamiento: estado,
        },
      });

      await tx.auditoria.create({
        data: { accion: 'CREAR', entidad: 'PACIENTE_KINE', adminId: req.user.id },
      });

      return creado;
    });

    res.status(201).json(paciente);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un paciente registrado con ese RUT' });
    }
    console.error('[CREAR PACIENTE KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al crear paciente' });
  }
};

const actualizarPaciente = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  const body = req.body || {};
  const data = {};

  if (body.rut !== undefined) data.rut = normalizarTextoOpcional(body.rut);
  if (typeof body.nombre === 'string' && body.nombre.trim()) data.nombre = body.nombre.trim();
  if (typeof body.apellidoP === 'string' && body.apellidoP.trim()) data.apellidoP = body.apellidoP.trim();
  if (typeof body.apellidoM === 'string') data.apellidoM = body.apellidoM.trim();
  if (body.fechaNacimiento !== undefined) {
    const parsed = parsearFechaOpcional(body.fechaNacimiento);
    if (parsed === undefined) return res.status(400).json({ error: 'Fecha de nacimiento inválida' });
    data.fechaNacimiento = parsed;
  }
  if (body.telefono !== undefined) data.telefono = normalizarTextoOpcional(body.telefono);
  if (body.email !== undefined) data.email = normalizarTextoOpcional(body.email, { lowercase: true });
  if (body.prevision !== undefined) data.prevision = normalizarTextoOpcional(body.prevision);
  if (body.ocupacion !== undefined) data.ocupacion = normalizarTextoOpcional(body.ocupacion);
  if (body.medicoDerivante !== undefined) data.medicoDerivante = normalizarTextoOpcional(body.medicoDerivante);
  if (body.diagnosticoMedico !== undefined) data.diagnosticoMedico = normalizarTextoOpcional(body.diagnosticoMedico);
  if (body.motivoConsulta !== undefined) data.motivoConsulta = normalizarTextoOpcional(body.motivoConsulta);
  if (body.antecedentesMorbidos !== undefined) data.antecedentesMorbidos = normalizarTextoOpcional(body.antecedentesMorbidos);
  if (body.activo !== undefined) data.activo = Boolean(body.activo);
  if (body.estadoTratamiento !== undefined) {
    if (!ESTADOS_TRATAMIENTO.has(body.estadoTratamiento)) {
      return res.status(400).json({ error: 'Estado de tratamiento inválido' });
    }
    data.estadoTratamiento = body.estadoTratamiento;
  }

  try {
    const actualizado = await prisma.pacienteKine.update({ where: { id }, data });
    res.json(actualizado);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Paciente no encontrado' });
    if (error.code === 'P2002') return res.status(400).json({ error: 'Ese RUT ya pertenece a otro paciente' });
    console.error('[ACTUALIZAR PACIENTE KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar paciente' });
  }
};

const archivarPaciente = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.pacienteKine.update({ where: { id }, data: { activo: false } });
      await tx.auditoria.create({
        data: { accion: 'ARCHIVAR', entidad: 'PACIENTE_KINE', adminId: req.user.id },
      });
    });
    res.json({ message: 'Paciente archivado correctamente (historial clínico preservado)' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Paciente no encontrado' });
    console.error('[ARCHIVAR PACIENTE KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al archivar paciente' });
  }
};

// =======================================================
// 4. EVALUACIONES KINÉSICAS
// =======================================================
const crearEvaluacion = async (req, res) => {
  const pacienteId = Number(req.params.pacienteId);
  if (!Number.isInteger(pacienteId) || pacienteId <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  const body = req.body || {};
  const evaReposo = validarEva(body.evaReposo);
  const evaMovimiento = validarEva(body.evaMovimiento);
  if (evaReposo === undefined || evaMovimiento === undefined) {
    return res.status(400).json({ error: 'La escala EVA debe ser un número entero entre 0 y 10' });
  }

  const tipo = body.tipo && TIPOS_EVALUACION.has(body.tipo) ? body.tipo : 'INICIAL';
  const fecha = parsearFechaOpcional(body.fecha);
  if (body.fecha && fecha === undefined) return res.status(400).json({ error: 'Fecha inválida' });

  try {
    const evaluacion = await prisma.evaluacionKine.create({
      data: {
        pacienteId,
        kinesiologoId: req.user.id,
        fecha: fecha ?? new Date(),
        tipo,
        zonaAfectada: normalizarTextoOpcional(body.zonaAfectada) ?? null,
        anamnesis: normalizarTextoOpcional(body.anamnesis) ?? null,
        evaReposo,
        evaMovimiento,
        rangoArticular: normalizarTextoOpcional(body.rangoArticular) ?? null,
        fuerzaMuscular: normalizarTextoOpcional(body.fuerzaMuscular) ?? null,
        pruebasEspeciales: normalizarTextoOpcional(body.pruebasEspeciales) ?? null,
        evaluacionPostural: normalizarTextoOpcional(body.evaluacionPostural) ?? null,
        diagnosticoKinesico: normalizarTextoOpcional(body.diagnosticoKinesico) ?? null,
        objetivos: normalizarTextoOpcional(body.objetivos) ?? null,
        planTratamiento: normalizarTextoOpcional(body.planTratamiento) ?? null,
      },
      include: {
        kinesiologo: { select: { id: true, nombre: true, especialidad: true, registroProfesional: true } },
      },
    });
    res.status(201).json(evaluacion);
  } catch (error) {
    if (error.code === 'P2003') return res.status(404).json({ error: 'Paciente no encontrado' });
    console.error('[CREAR EVALUACION KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al guardar evaluación' });
  }
};

const actualizarEvaluacion = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de evaluación inválido' });
  }

  const body = req.body || {};
  const evaReposo = body.evaReposo !== undefined ? validarEva(body.evaReposo) : undefined;
  const evaMovimiento = body.evaMovimiento !== undefined ? validarEva(body.evaMovimiento) : undefined;
  if (evaReposo === undefined && body.evaReposo !== undefined) {
    return res.status(400).json({ error: 'EVA en reposo debe estar entre 0 y 10' });
  }
  if (evaMovimiento === undefined && body.evaMovimiento !== undefined) {
    return res.status(400).json({ error: 'EVA en movimiento debe estar entre 0 y 10' });
  }

  const data = {};
  if (body.tipo && TIPOS_EVALUACION.has(body.tipo)) data.tipo = body.tipo;
  if (body.fecha) {
    const f = parsearFechaOpcional(body.fecha);
    if (f === undefined) return res.status(400).json({ error: 'Fecha inválida' });
    data.fecha = f;
  }
  if (body.zonaAfectada !== undefined) data.zonaAfectada = normalizarTextoOpcional(body.zonaAfectada);
  if (body.anamnesis !== undefined) data.anamnesis = normalizarTextoOpcional(body.anamnesis);
  if (body.evaReposo !== undefined) data.evaReposo = evaReposo;
  if (body.evaMovimiento !== undefined) data.evaMovimiento = evaMovimiento;
  if (body.rangoArticular !== undefined) data.rangoArticular = normalizarTextoOpcional(body.rangoArticular);
  if (body.fuerzaMuscular !== undefined) data.fuerzaMuscular = normalizarTextoOpcional(body.fuerzaMuscular);
  if (body.pruebasEspeciales !== undefined) data.pruebasEspeciales = normalizarTextoOpcional(body.pruebasEspeciales);
  if (body.evaluacionPostural !== undefined) data.evaluacionPostural = normalizarTextoOpcional(body.evaluacionPostural);
  if (body.diagnosticoKinesico !== undefined) data.diagnosticoKinesico = normalizarTextoOpcional(body.diagnosticoKinesico);
  if (body.objetivos !== undefined) data.objetivos = normalizarTextoOpcional(body.objetivos);
  if (body.planTratamiento !== undefined) data.planTratamiento = normalizarTextoOpcional(body.planTratamiento);

  try {
    const actualizada = await prisma.evaluacionKine.update({ where: { id }, data });
    res.json(actualizada);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Evaluación no encontrada' });
    console.error('[ACTUALIZAR EVALUACION KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar evaluación' });
  }
};

// =======================================================
// 5. EVOLUCIONES POR SESIÓN (SOAP + EVA PRE/POST)
// =======================================================
const crearEvolucion = async (req, res) => {
  const pacienteId = Number(req.params.pacienteId);
  if (!Number.isInteger(pacienteId) || pacienteId <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  const body = req.body || {};
  const evaPre = validarEva(body.evaPre);
  const evaPost = validarEva(body.evaPost);
  if (evaPre === undefined || evaPost === undefined) {
    return res.status(400).json({ error: 'EVA pre/post debe ser un número entero entre 0 y 10' });
  }

  const asistencia = body.asistencia && ESTADOS_ASISTENCIA.has(body.asistencia) ? body.asistencia : 'ASISTIO';
  const fecha = parsearFechaOpcional(body.fecha);
  if (body.fecha && fecha === undefined) return res.status(400).json({ error: 'Fecha inválida' });

  try {
    let numeroSesion = body.numeroSesion !== undefined && body.numeroSesion !== '' ? Number(body.numeroSesion) : null;
    if (!Number.isInteger(numeroSesion) || numeroSesion <= 0) {
      const ultima = await prisma.evolucionKine.findFirst({
        where: { pacienteId },
        orderBy: { numeroSesion: 'desc' },
        select: { numeroSesion: true },
      });
      numeroSesion = (ultima?.numeroSesion || 0) + 1;
    }

    const evolucion = await prisma.evolucionKine.create({
      data: {
        pacienteId,
        kinesiologoId: req.user.id,
        numeroSesion,
        fecha: fecha ?? new Date(),
        asistencia,
        evaPre,
        evaPost,
        subjetivo: normalizarTextoOpcional(body.subjetivo) ?? null,
        objetivo: normalizarTextoOpcional(body.objetivo) ?? null,
        analisis: normalizarTextoOpcional(body.analisis) ?? null,
        plan: normalizarTextoOpcional(body.plan) ?? null,
      },
      include: {
        kinesiologo: { select: { id: true, nombre: true } },
      },
    });
    res.status(201).json(evolucion);
  } catch (error) {
    if (error.code === 'P2003') return res.status(404).json({ error: 'Paciente no encontrado' });
    console.error('[CREAR EVOLUCION KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al registrar evolución' });
  }
};

const actualizarEvolucion = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de evolución inválido' });
  }

  const body = req.body || {};
  const evaPre = body.evaPre !== undefined ? validarEva(body.evaPre) : undefined;
  const evaPost = body.evaPost !== undefined ? validarEva(body.evaPost) : undefined;
  if (evaPre === undefined && body.evaPre !== undefined) return res.status(400).json({ error: 'EVA pre inválido' });
  if (evaPost === undefined && body.evaPost !== undefined) return res.status(400).json({ error: 'EVA post inválido' });

  const data = {};
  if (body.numeroSesion !== undefined && Number.isInteger(Number(body.numeroSesion))) {
    data.numeroSesion = Number(body.numeroSesion);
  }
  if (body.asistencia && ESTADOS_ASISTENCIA.has(body.asistencia)) data.asistencia = body.asistencia;
  if (body.fecha) {
    const f = parsearFechaOpcional(body.fecha);
    if (f === undefined) return res.status(400).json({ error: 'Fecha inválida' });
    data.fecha = f;
  }
  if (body.evaPre !== undefined) data.evaPre = evaPre;
  if (body.evaPost !== undefined) data.evaPost = evaPost;
  if (body.subjetivo !== undefined) data.subjetivo = normalizarTextoOpcional(body.subjetivo);
  if (body.objetivo !== undefined) data.objetivo = normalizarTextoOpcional(body.objetivo);
  if (body.analisis !== undefined) data.analisis = normalizarTextoOpcional(body.analisis);
  if (body.plan !== undefined) data.plan = normalizarTextoOpcional(body.plan);

  try {
    const actualizada = await prisma.evolucionKine.update({ where: { id }, data });
    res.json(actualizada);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Evolución no encontrada' });
    console.error('[ACTUALIZAR EVOLUCION KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar evolución' });
  }
};

// =======================================================
// 6. CATÁLOGO DE EJERCICIOS TERAPÉUTICOS (SEPARADO DEL GYM)
// =======================================================
const getEjerciciosKine = async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicioKine.findMany({
      orderBy: [{ zonaCorporal: 'asc' }, { nombre: 'asc' }],
    });
    res.json(ejercicios);
  } catch (error) {
    console.error('[GET EJERCICIOS KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al obtener el catálogo terapéutico' });
  }
};

const crearEjercicioKine = async (req, res) => {
  const { nombre, zonaCorporal, categoria, descripcion, indicacionesClinicas, videoUrl } = req.body || {};
  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre del ejercicio terapéutico es obligatorio' });
  }

  const urlSegura = validarVideoUrl(videoUrl);
  if (urlSegura === undefined) {
    return res.status(400).json({ error: 'El enlace de video debe ser una URL http o https válida' });
  }

  try {
    const nuevo = await prisma.ejercicioKine.create({
      data: {
        nombre: nombre.trim(),
        zonaCorporal: normalizarTextoOpcional(zonaCorporal) ?? null,
        categoria: normalizarTextoOpcional(categoria) ?? null,
        descripcion: normalizarTextoOpcional(descripcion) ?? null,
        indicacionesClinicas: normalizarTextoOpcional(indicacionesClinicas) ?? null,
        videoUrl: urlSegura,
      },
    });
    res.status(201).json(nuevo);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Ya existe un ejercicio terapéutico con ese nombre' });
    }
    console.error('[CREAR EJERCICIO KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al crear ejercicio terapéutico' });
  }
};

const actualizarEjercicioKine = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de ejercicio inválido' });
  }

  const { nombre, zonaCorporal, categoria, descripcion, indicacionesClinicas, videoUrl } = req.body || {};
  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre del ejercicio terapéutico es obligatorio' });
  }

  const urlSegura = validarVideoUrl(videoUrl);
  if (urlSegura === undefined) {
    return res.status(400).json({ error: 'El enlace de video debe ser una URL http o https válida' });
  }

  try {
    const actualizado = await prisma.ejercicioKine.update({
      where: { id },
      data: {
        nombre: nombre.trim(),
        zonaCorporal: normalizarTextoOpcional(zonaCorporal) ?? null,
        categoria: normalizarTextoOpcional(categoria) ?? null,
        descripcion: normalizarTextoOpcional(descripcion) ?? null,
        indicacionesClinicas: normalizarTextoOpcional(indicacionesClinicas) ?? null,
        videoUrl: urlSegura,
      },
    });
    res.json(actualizado);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Ejercicio no encontrado' });
    if (error.code === 'P2002') return res.status(400).json({ error: 'Ya existe otro ejercicio con ese nombre' });
    console.error('[UPDATE EJERCICIO KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar ejercicio terapéutico' });
  }
};

const eliminarEjercicioKine = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de ejercicio inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'EJERCICIO_KINE', adminId: req.user.id },
      });
      await tx.ejercicioKine.delete({ where: { id } });
    });
    res.json({ message: 'Ejercicio terapéutico eliminado correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Ejercicio no encontrado' });
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'No se puede eliminar porque está asignado en una pauta de paciente.' });
    }
    console.error('[DELETE EJERCICIO KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al eliminar ejercicio terapéutico' });
  }
};

// =======================================================
// 7. RUTINAS / PAUTAS TERAPÉUTICAS DE PACIENTES
// =======================================================
const crearRutinaKine = async (req, res) => {
  const pacienteId = Number(req.params.pacienteId);
  if (!Number.isInteger(pacienteId) || pacienteId <= 0) {
    return res.status(400).json({ error: 'ID de paciente inválido' });
  }

  const { nombre, fase, frecuenciaSemana, indicacionesGenerales, dolorMaximoTolerable, listaEjercicios } = req.body || {};
  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre de la pauta es obligatorio' });
  }

  const dolorMax = validarEva(dolorMaximoTolerable);
  if (dolorMax === undefined) {
    return res.status(400).json({ error: 'El dolor máximo tolerable (EVA) debe estar entre 0 y 10' });
  }

  const ejerciciosMapeados = mapearEjerciciosKine(listaEjercicios);
  if (!ejerciciosMapeados) {
    return res.status(400).json({ error: 'Debes agregar al menos un ejercicio terapéutico a la pauta' });
  }

  try {
    const rutina = await prisma.rutinaKine.create({
      data: {
        pacienteId,
        nombre: nombre.trim(),
        fase: normalizarTextoOpcional(fase) ?? null,
        frecuenciaSemana: normalizarTextoOpcional(frecuenciaSemana) ?? null,
        indicacionesGenerales: normalizarTextoOpcional(indicacionesGenerales) ?? null,
        dolorMaximoTolerable: dolorMax,
        ejercicios: { create: ejerciciosMapeados },
      },
      include: {
        ejercicios: {
          orderBy: { orden: 'asc' },
          include: { ejercicioKine: true },
        },
      },
    });
    res.status(201).json(rutina);
  } catch (error) {
    if (error.code === 'P2003') return res.status(404).json({ error: 'Paciente o ejercicio no encontrado' });
    console.error('[CREAR RUTINA KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al crear la pauta de ejercicios' });
  }
};

const actualizarRutinaKine = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de pauta inválido' });
  }

  const { nombre, fase, frecuenciaSemana, indicacionesGenerales, dolorMaximoTolerable, activa, listaEjercicios } = req.body || {};
  if (typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({ error: 'El nombre de la pauta es obligatorio' });
  }

  const dolorMax = validarEva(dolorMaximoTolerable);
  if (dolorMax === undefined) {
    return res.status(400).json({ error: 'El dolor máximo tolerable (EVA) debe estar entre 0 y 10' });
  }

  const ejerciciosMapeados = mapearEjerciciosKine(listaEjercicios);
  if (!ejerciciosMapeados) {
    return res.status(400).json({ error: 'Debes mantener al menos un ejercicio en la pauta' });
  }

  try {
    const rutinaActualizada = await prisma.$transaction(async (tx) => {
      const rutina = await tx.rutinaKine.update({
        where: { id },
        data: {
          nombre: nombre.trim(),
          fase: normalizarTextoOpcional(fase) ?? null,
          frecuenciaSemana: normalizarTextoOpcional(frecuenciaSemana) ?? null,
          indicacionesGenerales: normalizarTextoOpcional(indicacionesGenerales) ?? null,
          dolorMaximoTolerable: dolorMax,
          ...(activa !== undefined ? { activa: Boolean(activa) } : {}),
        },
      });

      await tx.rutinaKineEjercicio.deleteMany({ where: { rutinaKineId: id } });
      await tx.rutinaKineEjercicio.createMany({
        data: ejerciciosMapeados.map((ej) => ({ rutinaKineId: id, ...ej })),
      });

      return rutina;
    });

    res.json({ message: 'Pauta actualizada correctamente', rutinaActualizada });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Pauta no encontrada' });
    console.error('[UPDATE RUTINA KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al actualizar la pauta' });
  }
};

const toggleEstadoRutinaKine = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de pauta inválido' });
  }

  try {
    const actual = await prisma.rutinaKine.findUnique({ where: { id }, select: { activa: true } });
    if (!actual) return res.status(404).json({ error: 'Pauta no encontrada' });

    const actualizada = await prisma.rutinaKine.update({
      where: { id },
      data: { activa: !actual.activa },
    });
    res.json(actualizada);
  } catch (error) {
    console.error('[TOGGLE RUTINA KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al cambiar el estado de la pauta' });
  }
};

const eliminarRutinaKine = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'ID de pauta inválido' });
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.auditoria.create({
        data: { accion: 'ELIMINAR', entidad: 'RUTINA_KINE', adminId: req.user.id },
      });
      await tx.rutinaKine.delete({ where: { id } });
    });
    res.json({ message: 'Pauta eliminada correctamente' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ error: 'Pauta no encontrada' });
    console.error('[DELETE RUTINA KINE ERROR]:', error);
    res.status(500).json({ error: 'Error al eliminar la pauta' });
  }
};

module.exports = {
  loginKine,
  getProfesionales,
  crearProfesional,
  getDirectorioPortal,
  validarPinPortal,
  getRutinasPortalPaciente,
  getResumenClinico,
  getPacientes,
  getFichaPaciente,
  crearPaciente,
  actualizarPaciente,
  archivarPaciente,
  crearEvaluacion,
  actualizarEvaluacion,
  crearEvolucion,
  actualizarEvolucion,
  getEjerciciosKine,
  crearEjercicioKine,
  actualizarEjercicioKine,
  eliminarEjercicioKine,
  crearRutinaKine,
  actualizarRutinaKine,
  toggleEstadoRutinaKine,
  eliminarRutinaKine,
};
