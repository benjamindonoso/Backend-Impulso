require('dotenv').config();
const bcrypt = require('bcryptjs');
const prisma = require('../src/lib/prisma');

/**
 * Script de utilidad para crear un profesional de Kinesiología o promover un admin a SUPERADMIN.
 * Uso:
 *   node scripts/crear-kinesiologo.js "Nombre Apellido" correo@impulso.cl "PasswordSeguro123" [KINESIOLOGO|SUPERADMIN]
 */
async function main() {
  const [nombre, email, password, rolArg = 'KINESIOLOGO'] = process.argv.slice(2);
  const rol = ['KINESIOLOGO', 'SUPERADMIN', 'ADMIN_GYM'].includes(rolArg) ? rolArg : 'KINESIOLOGO';

  if (!nombre || !email || !password) {
    console.error('Uso: node scripts/crear-kinesiologo.js "Nombre" "correo@dominio.cl" "Password123" [KINESIOLOGO|SUPERADMIN]');
    process.exit(1);
  }

  if (password.length < 8) {
    console.error('La contraseña debe tener al menos 8 caracteres.');
    process.exit(1);
  }

  const emailNorm = email.trim().toLowerCase();
  const existente = await prisma.administrador.findUnique({ where: { email: emailNorm } });

  if (existente) {
    const actualizado = await prisma.administrador.update({
      where: { email: emailNorm },
      data: { rol },
      select: { id: true, nombre: true, email: true, rol: true },
    });
    console.log('Usuario existente actualizado con rol:', actualizado);
  } else {
    const passwordHash = await bcrypt.hash(password, 12);
    const creado = await prisma.administrador.create({
      data: { nombre: nombre.trim(), email: emailNorm, passwordHash, rol },
      select: { id: true, nombre: true, email: true, rol: true },
    });
    console.log('Profesional creado con éxito:', creado);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
