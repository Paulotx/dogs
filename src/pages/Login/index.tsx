import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

interface ICreteSession {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: ICreteSession) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                username: Yup.string().required('Campo é obrigatório'),
                password: Yup.string().required('Senha obragatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

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
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit} ref={formRef}>
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
