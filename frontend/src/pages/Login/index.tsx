import React from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div>
      <header className="login-container">
        <div className="login-logo-container"><img src="src/assets/Pokédex_logo.png" /></div>
        
        <form className="login-form">
          <TextField className="login-input" label="E-mail" variant="standard" />
          <TextField className="login-input" label="Password" variant="standard" type="password" />
        
          <div className="login-buttons-container">
            <Link className="login-form-buttons" to='/pokemonlist'>
              <Button className="login-form-buttons" color='success' variant="contained">LOGIN</Button>
            </Link>
            
            <Link className="login-form-buttons" to='/register'>
              <Button className="login-form-buttons" color='info' variant="contained">CRIAR UMA CONTA</Button>
            </Link>
          </div>
        </form>
      </header>
    </div>
  )
}
