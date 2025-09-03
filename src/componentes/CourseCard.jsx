export default function CourseCard({ course, onEdit, onDelete }) {
return (
<article className="card">
<h3>{course.titulo}</h3>
<p><strong>Instructor:</strong> {course.instructor || "—"}</p>
<p>{course.descripcion || "Sin descripción"}</p>
<div className="form-actions">
<button className="btn secondary" onClick={() => onEdit(course)}>Editar</button>
<button className="btn" onClick={() => onDelete(course.id)}>Eliminar</button>
</div>
</article>
);
}