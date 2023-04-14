import React, {useState} from 'react';
import Form from '../../components/Form';
import Swal from "sweetalert2"
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <main className="login-container">
        <div className="login-logo-container"><img src="src/assets/Pokédex_logo.png" /></div>
        
        <Form
          onNameChange={() => {}}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            if(!email || !password) {
              Swal.fire({
                title: 'Preencha com seu e-mail e senha',
                text: "Certifique-se de que nenhum campo está em branco!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Voltar'
              })
            }
            console.log(e)
          }}
        />
      </main>
    </div>
  )
}
