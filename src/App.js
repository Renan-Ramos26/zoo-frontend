import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AnimaisPage from "./pages/AnimaisPage";
import CuidadosPage from "./pages/CuidadosPage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar simples */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "15px" }}>🏠 Home</Link>
        <Link to="/animais" style={{ marginRight: "15px" }}>🐾 Animais</Link>
        <Link to="/cuidados">💉 Cuidados</Link>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<AnimaisPage />} />
        <Route path="/cuidados" element={<CuidadosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
