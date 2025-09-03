// server.js
import express from 'express';
import cors from 'cors';
import {
  actualizarCurso,
  obtenerCurso,
  crearCurso,
  listarCursos,
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

app.get('/api/cursos', async (req, res) => {
  try {
    const cursos = await listarCursos();
    res.json(cursos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cursos/:id', async (req, res) => {
  try {
    const curso = await obtenerCurso(req.params.id);
    if (!curso) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json(curso);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/cursos/:id', async (req, res) => {
  try {
    const curso = await actualizarCurso(req.params.id, req.body);
    res.json(curso);
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
