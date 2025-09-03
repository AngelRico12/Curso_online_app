const API_URL = 'http://localhost:3000/api/cursos';


export async function crearCurso(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}