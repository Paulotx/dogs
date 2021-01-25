import React, { useCallback, FormEvent } from 'react';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

interface ICreteSession {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const handleSubmit = useCallback((data: ICreteSession) => {
        console.log(data);
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(json => {
                console.log(json);
            });
    }, []);

    return (
        <Container>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    label="Usuário"
                    type="text"
                    id="username"
                />
                <Input
                    name="password"
                    label="Senha"
                    id="password"
                    type="password"
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
};

export default Login;
