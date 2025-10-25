import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  });

  return (
    <div className="lista-usuarios">
      <h2>Lista de Usuarios</h2>
      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario-card">
            <h3>{usuario.name}</h3>
            <p>📧 {usuario.email}</p>
            <p>🏢 {usuario.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
