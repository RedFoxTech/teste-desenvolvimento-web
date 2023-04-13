import React from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  return (
    <div className='register-form-container'>
        <form className='register-form center-form'>
          <p className='register-title'>CADASTRE-SE</p>
          <TextField className="register-input" label="Nome" variant="standard" />
          <TextField className="register-input" label="E-mail" variant="standard" />
          <TextField className="register-input" label="Password" variant="standard" type="password" />

          <div className="register-buttons-container">
            <Button className="register-form-buttons" color='success' variant="contained">CRIAR CONTA</Button>
            <Link className="register-form-buttons" to='/'>
              <Button color='info' variant="contained">VOLTAR</Button>
            </Link>
          </div>
        </form>
    </div>
  )
}
