import { useState } from "react";
import "./LoginModal.css"; // Para estilos básicos

function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);

    // Simulación de backend con 1.5 segundos de delay
    setTimeout(() => {
      setLoading(false);

      // Simulación de login exitoso
      if (email === "admin@demo.com" && password === "123456") {
        onLogin({ email });
      } else {
        setError("Credenciales inválidas.");
      }
    }, 1500);
  };

  return (
    <div className="login-modal-backdrop">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Iniciar Sesión</h2>
        <h6 id="credenciales">(admin@demo.com / 123456)</h6>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
