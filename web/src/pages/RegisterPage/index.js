import { Box } from "@material-ui/core";
import { useState } from "react";
import { toast } from 'react-toastify';

import AuthForm from "../../components/AuthForm";
import Input from "../../components/AuthForm/Input";
import Button from "../../components/AuthForm/Button";
import ContainerComponent from "../../components/Container";
import TitleSecondary from "../../components/TitleSecondary";
import HomeHeader from "../../components/HomeHeader";

import API from "../../services/api";
import useTokenStore from "../../hooks/useTokenStore";
import { useHistory } from "react-router-dom";
import { isValidDataRegister } from "../../utils/isValidData";

function RegisterPage() {
  const { userLogin } = useTokenStore();

  let history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  async function handlerRegisterClick() {
    if (isValidDataRegister(email, name, password)) {
      try {
        const response = await API.post('/register', { email, name, password });
        
        if (response.status === 201) {
          toast.success('Sua conta foi criada com sucesso!');
          userLogin(response.data.token);
          history.push('/dashboard');
        } else {
          toast.info('Houve um problema inesperado na criação da sua conta, tente novamente.');
        }
      } catch (err) {
        toast.info('Houve um problema inesperado tente novamente.');
        console.log(err)
      }
    }
  }

  return (
    <>
    <HomeHeader 
      isRouterHome={true}
    />
    <Box bgcolor="dark.main" minHeight="100vh" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>
      <ContainerComponent>
        <TitleSecondary label="Bem vindo!"/>

        <Box display="flex" justifyContent='center' alignItems='center' minHeight="100%">
          <AuthForm>
            <Input id="name" label="Nome" type="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input id="email" label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input id="password" label="Senha" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button label="Me cadastrar" onClick={handlerRegisterClick}/>
          </AuthForm>
        </Box>

      </ContainerComponent>
    </Box>
    </>
  )
}

export default RegisterPage;