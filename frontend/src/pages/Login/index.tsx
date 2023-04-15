import React, {useState} from 'react';
import Form from '../../components/Form';
import Swal from "sweetalert2"
import './login.css';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

type TLoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  }
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <main className="login-container">
        <div className="login-logo-container"><img src="src/assets/Pokédex_logo.png" /></div>
        
        <Form
          onNameChange={() => {}}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={async (e) => {
            e.preventDefault();
            if(!email || !password) {
              Swal.fire({
                title: 'Preencha com seu e-mail e senha',
                text: "Certifique-se de que nenhum campo está em branco!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Voltar'
              })

              return;
            }
            try {
              const auth = await api.post<TLoginResponse>("/users/login", {email, password})
              const userToken = auth.data.token;
              const userId = auth.data.user.id;
  
              localStorage.setItem('pokedex-user-token', userToken);
              localStorage.setItem('pokedex-user-id', userId);
  
              navigate("/pokemonlist")
            } catch (error) {
              Swal.fire({
                title: 'Erro',
                text: "Certifique-se de que suas credenciais estão corretas!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Voltar'
              })
            }
          }}
        />
      </main>
    </div>
  )
}
