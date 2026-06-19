const express = require("express");
const cors = require("cors");
const clienteRoutes = require("./routes/cliente.routes");
const familiaRoutes = require("./routes/familia.routes");
const kioscoRoutes = require("./routes/kiosco.routes");
const ejercicioRoutes = require("./routes/ejercicio.routes"); 
const rutinaRoutes = require("./routes/rutina.routes");     
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const app = express();

app.use(cors({
  origin: '*', // Por ahora, prueba con asterisco para ver si funciona
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.set('trust proxy', 1);

app.use(express.json());

// 👇 AÑADE EL CÓDIGO DE PRUEBA JUSTO AQUÍ 👇
app.use((req, res, next) => {
  console.log('--- Nueva petición recibida:', req.method, req.url);
  next();
});
// 👆 ------------------------------------- 👆

app.get("/", (req, res) => {
  res.json({
    message: "Gym API funcionando"
  });
});

app.use("/api/clientes", clienteRoutes);
app.use("/api/familias", familiaRoutes);
app.use("/api/kiosco", kioscoRoutes); 
app.use("/api/ejercicios", ejercicioRoutes);
app.use("/api/rutinas", rutinaRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

module.exports = app;