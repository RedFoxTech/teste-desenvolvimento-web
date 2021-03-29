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
import { isValidDataLogin } from "../../utils/isValidData";

function LoginPage() {
  const { userLogin } = useTokenStore();

  let history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  async function handlerLoginClick() {
    if (isValidDataLogin(email, password)) {
      try {
        const response = await API.post('/login', { email, password });
        
        if (response.status === 200) {
          toast.success('Bem vindo de volta!');
          userLogin(response.data.token);
          history.push('/dashboard');
        }
      } catch (err) {
        toast.info('Dados incorretos, tente novamente!');
      }
    }
  }
  
  return (
    <>
    <HomeHeader isRouterHome={true}/>
    <Box bgcolor="dark.main" minHeight="100vh" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>    
      <ContainerComponent>
        <TitleSecondary label="Bem vindo de volta!"/>

        <Box display="flex" justifyContent='center' alignItems='center' minHeight="100%">
          <AuthForm>
            <Input id="email" label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input id="password" label="Senha" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button label="Entrar" onClick={handlerLoginClick}/>
          </AuthForm>
        </Box>

      </ContainerComponent>
    </Box>
    </>
  )
}

export default LoginPage;