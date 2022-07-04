import './Login.css';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { contexto } from '../Context/Context';

export default function Login() {
  const {loged, setLoged, user, setUser} = useContext(contexto);
  
    function  RequetLogin (e) {
      e.preventDefault();
        const user = {
            mail: document.getElementById('mail').value,
            password: document.getElementById('password').value
        }

       const userType = fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.mail === user.mail && data.password === user.password){
            setLoged(true)
            setUser(data.mail)
            Swal.fire({
              title: "Bienvenido",
              text: "Puede ingresar",
              icon: "success",
              confirmButtonText: "Ok",
            })
          }

          
        }).catch(err => {
            console.log(err)
            Swal.fire({
              title: "Error",
              text: "Usuario o contraseña incorrectos",
              icon: "error",
              confirmButtonText: "Ok",
            })
        })
        
        
    }


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
              placeholder="Ingrese Email"
              id="mail"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese contraseña"
              id="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-dark" onClick={(e) => {
              RequetLogin(e)
            }}>
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