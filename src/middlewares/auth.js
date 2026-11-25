const jwt = require('jsonwebtoken');

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || !secret.trim()) {
    throw new Error('JWT_SECRET debe estar definido en las variables de entorno.');
  }
  if (secret.length < 32) {
    console.warn('[SEGURIDAD] Se recomienda usar un JWT_SECRET de al menos 32 caracteres aleatorios.');
  }
  return secret;
}

const JWT_SECRET = getJwtSecret();

function extractBearerToken(req) {
  const header = req.header('Authorization');
  if (!header || !header.startsWith('Bearer ')) return null;
  const token = header.slice(7).trim();
  return token || null;
}

/**
 * Autentica a un usuario del panel administrativo o clínico (excluye tokens de portales de alumnos/pacientes).
 */
const auth = (req, res, next) => {
  const token = extractBearerToken(req);

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    if (verified.scope === 'kiosco' || verified.scope === 'kine_portal') {
      return res.status(403).json({ error: 'Token sin privilegios administrativos.' });
    }
    req.user = {
      ...verified,
      rol: verified.rol || 'ADMIN_GYM',
    };
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Sesión expirada. Inicia sesión nuevamente.' });
    }
    return res.status(401).json({ error: 'Token no válido.' });
  }
};

/**
 * Middleware de control de acceso basado en roles (RBAC).
 */
const requireRole = (...rolesPermitidos) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'No autenticado.' });
  }
  const rolUsuario = req.user.rol || 'ADMIN_GYM';
  if (rolUsuario === 'SUPERADMIN' || rolesPermitidos.includes(rolUsuario)) {
    return next();
  }
  return res.status(403).json({ error: 'No tienes permisos para acceder a este recurso.' });
};

/**
 * Permite acceso a un administrador del gimnasio O a un alumno autenticado en el kiosco
 * únicamente para los IDs de cliente autorizados en su token.
 */
const authKioscoOrAdmin = (req, res, next) => {
  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);

    if (verified.scope === 'kiosco') {
      const requestedId = Number(req.params.clienteId);
      const allowedIds = Array.isArray(verified.allowedIds) ? verified.allowedIds : [];
      if (!Number.isInteger(requestedId) || !allowedIds.includes(requestedId)) {
        return res.status(403).json({ error: 'No autorizado para consultar este perfil.' });
      }
      req.kiosco = verified;
      return next();
    }

    if (verified.scope === 'kine_portal') {
      return res.status(403).json({ error: 'Token no válido para el módulo de gimnasio.' });
    }

    const rol = verified.rol || 'ADMIN_GYM';
    if (rol !== 'ADMIN_GYM' && rol !== 'SUPERADMIN') {
      return res.status(403).json({ error: 'No tienes permisos para el módulo de gimnasio.' });
    }

    req.user = { ...verified, rol };
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Sesión expirada.' });
    }
    return res.status(401).json({ error: 'Token no válido.' });
  }
};

/**
 * Permite acceso a un kinesiólogo/superadmin O a un paciente autenticado en el portal kine
 * únicamente para su propio pacienteId.
 */
const authKinePortalOrStaff = (req, res, next) => {
  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);

    if (verified.scope === 'kine_portal') {
      const requestedId = Number(req.params.pacienteId);
      if (!Number.isInteger(requestedId) || verified.pacienteId !== requestedId) {
        return res.status(403).json({ error: 'No autorizado para consultar esta pauta.' });
      }
      req.kinePortal = verified;
      return next();
    }

    if (verified.scope === 'kiosco') {
      return res.status(403).json({ error: 'Token no válido para kinesiología.' });
    }

    const rol = verified.rol || 'ADMIN_GYM';
    if (rol !== 'KINESIOLOGO' && rol !== 'SUPERADMIN') {
      return res.status(403).json({ error: 'No tienes permisos para el módulo de kinesiología.' });
    }

    req.user = { ...verified, rol };
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Sesión expirada.' });
    }
    return res.status(401).json({ error: 'Token no válido.' });
  }
};

module.exports = {
  auth,
  requireRole,
  authKioscoOrAdmin,
  authKinePortalOrStaff,
  JWT_SECRET,
};
