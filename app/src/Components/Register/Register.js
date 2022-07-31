import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useState } from "react"








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
                id="name"
              />
            </div>
            <div className="form-group mt-3">
              <label>CUIT</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="20123456780"
                id="cuit"
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Correo electonico"
                id="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Reingrese correo electonico"
                id="email_confirmation"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
                id="password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Reingrese contraseña"
                id="password_confirmation"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/" onClick={(e) => {
                
                
                
                const UserData = {
                  name: document.getElementById("name").value,
                  mail: document.getElementById("email").value,
                  cuit: document.getElementById("cuit").value,
                  confirmEmail: document.getElementById("email_confirmation").value,
                  password: document.getElementById("password").value,
                  confirmPassword: document.getElementById("password_confirmation").value,
                  
                }
                
                if (UserData.name === "" || UserData.mail === "" || UserData.cuit === "" || UserData.confirmEmail === "" || UserData.password === "" || UserData.confirmPassword === "") {
                  e.preventDefault()
                  Swal.fire({
                    title: "Error",
                    text: "Por favor complete todos los campos",
                    icon: "error",
                    confirmButtonText: "Ok",
                  })
                }else{
                  if (UserData.mail !== UserData.confirmEmail) {
                    e.preventDefault()
                    Swal.fire({
                      title: "Error",
                      text: "Los correos no coinciden",
                      icon: "error",
                      confirmButtonText: "Ok",
                    })
                  }else{
                    if (UserData.password !== UserData.confirmPassword) {
                      e.preventDefault()
                      Swal.fire({
                        title: "Error",
                        text: "Las contraseñas no coinciden",
                        icon: "error",
                        confirmButtonText: "Ok",
                      })
                    }else{

                      fetch("http://localhost:8080/api/register", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(UserData),

                      }).then((res) => {
                        if (res.status === 400) {
                          Swal.fire({
                            title: "Error",
                            text: "El CUIT ya se encuentra registrado",
                            icon: "error",
                            confirmButtonText: "Ok",
                          })
                          console.log(res)
                          
                        }else{
                          console.log(res.body)
                        Swal.fire({
                          title: "Registro exitoso",
                          text: "Puede ingresar",
                          icon: "success",
                          confirmButtonText: "Ok",
                        })
                        }
                        
                      })
                      
                      
                    }
                  }
                }


              }}>
              <button type="button" className="btn btn-dark">
                Registrarse
              </button>
              </Link>
            </div>
            
          </div>
        </form>
      </div>
    )

    

 }



