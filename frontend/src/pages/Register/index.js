import React from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import pokeLogo from '../../assets/logo-dex.png';

import './styles.css';

const Register = () => {
    return (
        <div id="Registro">
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

                <Form className="form-registro" onSubmit={() => { }}>
                    <h3 className="text-light w-100">Fazer cadastro</h3>
                    <Form.Group as={Row} className="w-100 text-light" >
                        <Form.Label className="w-100 text-warning" htmlFor="name">Nome completo</Form.Label>
                        <FormControl
                            id="name"
                            placeholder="Nome completo"
                            type="email"
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="w-100 text-light" >
                        <Form.Label className="w-100 text-warning" htmlFor="email">E-mail</Form.Label>
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
                    <Form.Group as={Row} className="w-100 text-light">
                        <Form.Label className="w-100 text-warning" htmlFor="conf-senha">Confirmar senha</Form.Label>
                        <FormControl
                            id="conf-senha"
                            placeholder="Confirmar senha"
                            type="password"
                        />
                    </Form.Group>

                    <Form.Group className="mt-2 w-100 text-light" as={Row}>
                        <Button type="submit" variant="warning" className="w-100 bg-warning mb-3">Registrar-se</Button>
                        <Form.Text>Já possuo uma conta!</Form.Text>
                        <Link to="/login" className="ml-auto text-warning">Ir para Login</Link>
                    </Form.Group>

                </Form>
            </main>
        </div>
    )
}

export default Register;