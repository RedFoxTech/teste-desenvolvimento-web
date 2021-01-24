import React from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import pokeLogo from '../../assets/logo-dex.png';
import './styles.css';

const Login = () => {
    return (
        <div id="Login">
            <main>
                <Link to="/" className="text-warning w-100 backToInitial">
                    <img                        
                        src={backIcon}
                        alt="Voltar"
                        className="mr-4"
                    />
                    Voltar para página inicial
                </Link>

                <header className="header mt-1">
                    <img src={pokeLogo} width={400} alt="PokeLogo" />
                </header>

                <Form className="form-login" onSubmit={() => { }}>
                    <h3 className="text-light w-100">Fazer Login</h3>
                    <Form.Group as={Row} className="w-100 text-light" >
                        <Form.Label className="w-100 text-warning" htmlFor="email">Email</Form.Label>
                        <FormControl
                            id="email"
                            placeholder="nome@examplo.com"
                            type="email"
                        />
                    </Form.Group>

                    <Form.Group as={Row} className="w-100 text-light">
                        <Form.Label className="w-100 text-warning" htmlFor="senha">Senha</Form.Label>
                        <FormControl
                            id="senha"
                            placeholder="Senha"
                            type="password"
                        />
                    </Form.Group>

                    <Form.Group className="mt-2 w-100 text-light" as={Row}>
                        <Button type="submit" variant="warning" className="w-100 bg-warning mb-3">Entrar</Button>
                        <Form.Text>Ainda não tem uma conta ?</Form.Text>
                        <Link to="/registro" className="ml-auto text-warning">Registrar-se</Link>
                    </Form.Group>

                </Form>
            </main>
        </div>
    )
}

export default Login;