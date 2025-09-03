import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'curso_online',
  password: '123456',
  port: 5432
});

export async function crearCurso(data) {
  const { titulo, instructor, descripcion } = data;
  const result = await pool.query(
    `INSERT INTO cursos (titulo, instructor, descripcion, creado_en)
     VALUES ($1, $2, $3, NOW()) RETURNING *`,
    [titulo, instructor, descripcion]
  );
  return result.rows[0];
}

export async function listarCursos() {
  const result = await pool.query('SELECT * FROM cursos ORDER BY creado_en DESC');
  return result.rows;
}


export async function actualizarCurso(id, data) {
  const { titulo, instructor, descripcion } = data;
  const result = await pool.query(
    `UPDATE cursos
     SET titulo = $1, instructor = $2, descripcion = $3
     WHERE id = $4 RETURNING *`,
    [titulo, instructor, descripcion, id]
  );
  if (result.rows.length === 0) throw new Error("Curso no encontrado");
  return result.rows[0];
}

export async function obtenerCurso(id) {
  const result = await pool.query('SELECT * FROM cursos WHERE id = $1', [id]);
  return result.rows[0] || null;
}

export async function eliminarCurso(id) {
  await pool.query('DELETE FROM cursos WHERE id = $1', [id]);
  return { ok: true };
}