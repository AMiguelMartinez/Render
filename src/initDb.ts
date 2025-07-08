import  pool  from './database/pgDatabase';

async function crearTabla() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS saludos (
        id SERIAL PRIMARY KEY,
        saludo TEXT NOT NULL
      );
    `);
    console.log('Tabla creada con éxito');
    process.exit(0);
  } catch (err: any) {
    console.error('Error al crear la tabla:', err.message);
    process.exit(1);
  }
}

export default crearTabla;
