import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home";
import Courses from "./paginas/Courses";
import "./index.css";


export default function App() {
return (
<BrowserRouter>
<header className="header">
<nav className="nav">
<Link to="/" className="logo">Curso Online</Link>
<div className="links">
<Link to="/">Inicio</Link>
<Link to="/cursos">Cursos</Link>
</div>
</nav>
</header>
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cursos" element={<Courses />} />
</Routes>
</main>
<footer className="footer">© {new Date().getFullYear()} Curso Online App</footer>
</BrowserRouter>
);
}