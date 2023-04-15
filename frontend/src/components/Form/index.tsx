import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './form.css'

interface IFormProps {
  isRegisterPage?: boolean;
  onNameChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: IFormProps) {
  const {isRegisterPage} = props;

  return (
    <form className="login-form" onSubmit={(e) => {props.onSubmit(e)}}>
      {!isRegisterPage && <Typography variant="h4">Faça seu Login</Typography>}
      {isRegisterPage && <TextField className="login-input" label="Nome" variant="standard" onChange={(e) => {props.onNameChange(e)}} />}
      <TextField className="login-input" label="E-mail" onChange={(e) => {props.onEmailChange(e)}} variant="standard" />
      <TextField className="login-input" label="Password" onChange={(e) => {props.onPasswordChange(e)}} variant="standard" type="password" />
    
      <div className="login-buttons-container">
        {
          isRegisterPage ?
            <>
            
            <Button type="submit" className="login-form-buttons" color='success' variant="contained">CRIAR CONTA</Button>
            
            <Link className="login-form-buttons" to='/'>
              <Button className="login-form-buttons" color='info' variant="contained">VOLTAR</Button>
            </Link>
          </>
          :
          <>
            
            <Button
              className="login-form-buttons"
              type="submit"
              color='success'
              variant="contained"
            >
              LOGIN
            </Button>
            
            
            <Link className="login-form-buttons" to='/register'>
              <Button className="login-form-buttons" color='info' variant="contained">CRIAR UMA CONTA</Button>
            </Link>
          </>
        }
      </div>
    </form>
  )
}
