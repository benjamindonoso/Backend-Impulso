require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const clienteRoutes = require('./routes/cliente.routes');
const familiaRoutes = require('./routes/familia.routes');
const kioscoRoutes = require('./routes/kiosco.routes');
const ejercicioRoutes = require('./routes/ejercicio.routes');
const rutinaRoutes = require('./routes/rutina.routes');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', 1);

// Cabeceras HTTP de seguridad (equivalente ligero a Helmet)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('X-XSS-Protection', '0');
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

// Lista blanca de CORS para producción y desarrollo local
const defaultOrigins = [
  'https://gym.impulsosaludymovimiento.cl',
  'https://kine.impulsosaludymovimiento.cl',
];

if (process.env.NODE_ENV !== 'production') {
  defaultOrigins.push(
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:4173',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174'
  );
}

const extraOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...defaultOrigins, ...extraOrigins]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Origen no permitido por CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json({ limit: '100kb' }));

// Rate limiting global para la API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas peticiones. Intenta nuevamente en unos minutos.' },
});

app.use('/api', apiLimiter);

app.get('/', (req, res) => {
  res.json({
    message: 'Gym API funcionando',
  });
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/familias', familiaRoutes);
app.use('/api/kiosco', kioscoRoutes);
app.use('/api/ejercicios', ejercicioRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador global de errores (incluye errores de CORS y JSON malformado)
app.use((err, req, res, next) => {
  if (err && err.message === 'Origen no permitido por CORS') {
    return res.status(403).json({ error: 'Acceso CORS denegado' });
  }
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON inválido en la petición' });
  }
  console.error('[ERROR NO CONTROLADO]:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
