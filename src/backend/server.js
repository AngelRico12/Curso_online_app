// server.js
import express from 'express';
import cors from 'cors';
import {
  crearCurso,
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

app.post('/api/cursos', async (req, res) => {
  try {
    const curso = await crearCurso(req.body);
    res.status(201).json(curso);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});



// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
