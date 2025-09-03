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