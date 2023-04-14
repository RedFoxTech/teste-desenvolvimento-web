import React, {useState} from 'react';
import Form from '../../components/Form';
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
            console.log(e)
          }}
        />
      </main>
    </div>
  )
}
