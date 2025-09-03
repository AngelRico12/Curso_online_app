import { useEffect, useState } from "react";
import CourseForm from "../componentes/CourseForm";
import CourseCard from "../componentes/CourseCard";

function Courses() {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [cursos, setCursos] = useState([]);

  async function refresh() {
    const data = await listarCursos();
    setCursos(data);
  }

  useEffect(() => { refresh(); }, []);

  function startCreate() {
    setEditing(null);
    setShowForm(true);
  }

  function startEdit(curso) {
    setEditing(curso);
    setShowForm(true);
  }

  async function handleSubmit(payload) {
    if (editing) {
      await actualizarCurso(editing.id, payload);
    } else {
      await crearCurso(payload);
    }
    setShowForm(false);
    setEditing(null);
    await refresh();
  }

  async function handleDelete(id) {
    if (confirm("¿Eliminar este curso?")) {
      await eliminarCurso(id);
      await refresh();
    }
  }

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2>Gestión de Cursos</h2>
        <button className="btn" onClick={startCreate}>Nuevo Curso</button>
      </div>

      {showForm && (
        <CourseForm
          initialValues={editing}
          onCancel={() => { setShowForm(false); setEditing(null); }}
          onSubmit={handleSubmit}
        />
      )}

      <div className="grid">
        {cursos.length === 0 && <p>No hay cursos aún. ¡Crea el primero!</p>}
        {cursos.map((c) => (
          <CourseCard key={c.id} course={c} onEdit={startEdit} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}

import {
  eliminarCurso,
  actualizarCurso,
  listarCursos,
  crearCurso
} from "../servicios/courseService";

export default Courses;
