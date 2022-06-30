import './Login.css';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Ingresar</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Ingresar
            </button>
          </div>
          <p className="forgot-password text-center mt-2 ">
            <Link to='/register'><Button variant="dark" className='margin-10'>Registrarse</Button></Link>
            <Button variant="dark" className='margin-10'>Recuperar cuenta</Button>
          </p>
        </div>
      </form>
    </div>
  
        </>
    );
}