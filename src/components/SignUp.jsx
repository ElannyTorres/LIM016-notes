import React from 'react';

import Logo from './Logo';

function SignUp() {
  return (
    <div className="signup-container">
      <Logo />
      <div className="principal-container">
        <div className="title">
          <h2>Sign Up</h2>
          <h2 id="login">Login</h2>
        </div>
        <div className="form-container">
          <form action="">
            <input type="email" placeholder="Ingrese su email" />
            <input type="password" placeholder="Ingrese su contraseña" />
            <button>Crear Usuario</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
