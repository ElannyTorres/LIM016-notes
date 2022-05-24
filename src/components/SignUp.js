import React from 'react';
import '../styles/SignUp.css';

import Logo from './Logo';

function SignUp() {
  return (
    <div className="signup-container">
      <Logo />
      <div className="principal-container">
        <div className="title">
          <h2>Sign Up</h2>
        </div>
        <div className="form-container">
          <form action="">
            <input type="email" placeholder="Ingrese su email" />
            <input type="password" placeholder="Ingrese su contraseña" />
            <input type="password" placeholder="Confirme su contraseña" />
            <button>Crear Usuario</button>
          </form>
          <h6>
            Ya tiene una cuenta? Haga click en el siguiente enlace{' '}
            <a href="/">Login</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
