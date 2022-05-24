import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

import Logo from './Logo';

function Login() {
  return (
    <div className="login-container">
      <Logo />
      <div className="principal-container">
        <div className="title">
          <h2>Login</h2>
        </div>
        <div className="form-container">
          <h4>¿Ya tiene una cuenta?</h4>
          <h4></h4>
          <form action="">
            <input type="email" placeholder="Ingrese su email" />
            <input type="password" placeholder="Ingrese su contraseña" />
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
