const API_URL = 'http://localhost:3000/api/cursos';


//prueba

export async function crearCurso(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function listarCursos() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function obtenerCurso(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

export async function actualizarCurso(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function eliminarCurso(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return { ok: true };
}