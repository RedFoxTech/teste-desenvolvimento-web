import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import './register.css';

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='register-form-page'>

      <div className='register-form-container'>
        <p className='register-form-title'>CADASTRE-SE</p>

        <Form
          isRegisterPage={true}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e)
          }}
        />
      </div>



        {/* <form className='register-form center-form'>
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
        </form> */}
    </div>
  )
}
