import { Button, TextField } from '@mui/material';
import React from 'react';
import './style.css';

export default function Login() {
  return (
    <div>
      <header className="App">
        <div className="logo-container"><img src="src/assets/Pokédex_logo.png" /></div>
        
        <form>
          <TextField className="input" label="Nome" variant="standard" />
          <TextField className="input" label="E-mail" variant="standard" />
          <TextField className="input" label="Password" variant="standard" type="password" />
        
          <div className="buttons-container">
            <Button className="form-buttons" color='success' variant="contained">LOGIN</Button>
            <Button className="form-buttons" color='info' variant="contained">CRIAR UMA CONTA</Button>
          </div>
        </form>
      </header>
    </div>
  )
}
