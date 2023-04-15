import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import './register.css';
import Swal from 'sweetalert2';
import { api } from '../../services/api';

type TRegisterResponse = {
  password: string;
  email: string;
  name: string;
}

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div className='register-form-page'>

      <div className='register-form-container'>
        <p className='register-form-title'>CADASTRE-SE</p>

        <Form
          isRegisterPage={true}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={async (e) => {
            e.preventDefault();
            if(!email || !password || !name) {
              Swal.fire({
                title: 'Preencha com seu nome, e-mail e senha',
                text: "Certifique-se de que nenhum campo está em branco!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Voltar'
              })
              return;
            }
            try {
              const response = await api.post<TRegisterResponse>("/users/", {name, email, password})
              if(response.status === 201) {
                navigate("/")
              }
            } catch (error) {
              Swal.fire({
                title: 'Erro',
                text: "Esse e-mail já está cadastrado!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Voltar'
              })
            }
          }}
        />
      </div>
    </div>
  )
}
