import { useEffect } from "react";

function LoginModal({ onClose }) {
  useEffect(() => {
    const modal = new bootstrap.Modal(document.getElementById("loginModal"));
    modal.show();

    const handleClose = () => {
      modal.hide();
      onClose();
    };

    const modalElement = document.getElementById("loginModal");
    modalElement.addEventListener("hidden.bs.modal", handleClose);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleClose);
    };
  }, [onClose]);

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
