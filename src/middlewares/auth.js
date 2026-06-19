const jwt = require('jsonwebtoken');

// Esta es tu "llave secreta". En producción deberías guardarla en un .env
const JWT_SECRET = 'mi_secreto_super_seguro_2026'; 

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token no válido.' });
  }
};

module.exports = { auth, JWT_SECRET };