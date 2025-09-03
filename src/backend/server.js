// server.js
import express from 'express';
import cors from 'cors';
import {
  pool
} from './courseService.js';

const app = express();
app.use(cors());
app.use(express.json());

// --- Prueba de conexión a PostgreSQL ---
(async () => {
  try {
    await pool.query('SELECT NOW()'); // Consulta simple
    console.log('Conexión a la base de datos exitosa ✅');
  } catch (err) {
    console.error('Error conectando a la base de datos ❌', err.message);
    process.exit(1); // termina la aplicación si falla la conexión
  }
})();



// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
