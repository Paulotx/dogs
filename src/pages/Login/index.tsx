import React, { useCallback, useState, FormEvent } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

const Login: React.FC = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(
        (event: FormEvent) => {
            event.preventDefault();

            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                });
        },
        [username, password],
    );

    return (
        <Container>
            <h1>Login</h1>

            <form onSubmit={event => handleSubmit(event)}>
                <Input label="Usuário" type="text" id="username" />
                <Input label="Senha" id="password" type="password" />
                <Button type="submit">Entrar</Button>
            </form>
        </Container>
    );
};

export default Login;
