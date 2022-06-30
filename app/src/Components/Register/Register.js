import { Button, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registrarse</h3>
            <div className="text-center">
              Ya estas registrado?{" "}
              <Link to="/"><Button variant="dark">Ingresar</Button></Link>
              
            </div>
            <div className="form-group mt-3">
              <label>Nombre completo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>CUIT</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="20123456780"
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Correo electonico"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-dark">
                Registrarse
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
}