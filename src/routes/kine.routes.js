const express = require('express');
const rateLimit = require('express-rate-limit');
const { auth, requireRole, authKinePortalOrStaff } = require('../middlewares/auth');
const kine = require('../controllers/kine.controller');

const router = express.Router();

const loginKineLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos fallidos. Espera 15 minutos e intenta nuevamente.' },
});

const pinPortalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 12,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos de PIN incorrectos. Espera unos minutos.' },
});

// 1. Autenticación del equipo de kinesiología
router.post('/auth/login', loginKineLimiter, kine.loginKine);

// 2. Portal del paciente (solo ejercicios, con PIN y token acotado)
router.get('/portal/directorio', kine.getDirectorioPortal);
router.post('/portal/validar', pinPortalLimiter, kine.validarPinPortal);
router.get('/portal/rutinas/:pacienteId', authKinePortalOrStaff, kine.getRutinasPortalPaciente);

// 3. Rutas clínicas protegidas (solo KINESIOLOGO o SUPERADMIN)
router.use(auth, requireRole('KINESIOLOGO'));

router.get('/resumen', kine.getResumenClinico);

router.get('/profesionales', kine.getProfesionales);
router.post('/profesionales', kine.crearProfesional);

router.get('/pacientes', kine.getPacientes);
router.get('/pacientes/:id', kine.getFichaPaciente);
router.post('/pacientes', kine.crearPaciente);
router.put('/pacientes/:id', kine.actualizarPaciente);
router.delete('/pacientes/:id', kine.archivarPaciente);

router.post('/pacientes/:pacienteId/evaluaciones', kine.crearEvaluacion);
router.put('/evaluaciones/:id', kine.actualizarEvaluacion);

router.post('/pacientes/:pacienteId/evoluciones', kine.crearEvolucion);
router.put('/evoluciones/:id', kine.actualizarEvolucion);

router.get('/ejercicios', kine.getEjerciciosKine);
router.post('/ejercicios', kine.crearEjercicioKine);
router.put('/ejercicios/:id', kine.actualizarEjercicioKine);
router.delete('/ejercicios/:id', kine.eliminarEjercicioKine);

router.post('/pacientes/:pacienteId/rutinas', kine.crearRutinaKine);
router.put('/rutinas/:id', kine.actualizarRutinaKine);
router.patch('/rutinas/:id/estado', kine.toggleEstadoRutinaKine);
router.delete('/rutinas/:id', kine.eliminarRutinaKine);

module.exports = router;
