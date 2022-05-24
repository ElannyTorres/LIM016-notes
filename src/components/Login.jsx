import React from 'react';
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
          <h6>¿Ya tiene una cuenta?</h6>
          <form action="">
            <input type="email" placeholder="cuenta@mail.com" />
            <input type="password" placeholder="******" />
            <button>Ingresar</button>
          </form>
          <h6>
            Si no tiene una cuenta haga click en el siguiente enlace{' '}
            <a href="/home">Sign Up</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
