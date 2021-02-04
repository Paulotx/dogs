import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

import { useUser } from '../../../hooks/user';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, LoginContainer, LoginContent } from './styles';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ErrorComponent from '../../../components/ErrorComponent';
import { USER_POST } from '../../../services/api';
import Head from '../../../components/Head';

interface ICreteSession {
    username: string;
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { userLogin } = useUser();

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreteSession) => {
            try {
                setLoading(true);
                setError(false);
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    username: Yup.string().required('Campo é obrigatório'),
                    email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('Campo é obrigatório'),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const { url, options } = USER_POST({
                    username: data.username,
                    email: data.email,
                    password: data.password,
                });

                const response = await fetch(url, options);
                const json = await response.json();

                if (response.ok) {
                    userLogin(data.username, data.password);
                } else {
                    setError(true);
                    setErrorMessage(json.message);
                }
            } catch (err) {
                if (!error) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                }
            } finally {
                setLoading(false);
            }
        },
        [userLogin, error],
    );

    return (
        <>
            <Header />

            <Container>
                <Head title="Criar Login" />

                <LoginContainer>
                    <LoginContent className="animeLeft">
                        <h1 className="title">Cadastre-se</h1>

                        <Form onSubmit={handleSubmit} ref={formRef}>
                            <Input
                                name="username"
                                label="Usuário"
                                type="text"
                                id="username"
                            />
                            <Input
                                name="email"
                                label="E-mail"
                                type="text"
                                id="email"
                            />
                            <Input
                                name="password"
                                label="Senha"
                                id="password"
                                type="password"
                            />

                            {loading ? (
                                <Button type="submit" disabled>
                                    Carregando...
                                </Button>
                            ) : (
                                <Button type="submit">Cadastrar</Button>
                            )}
                            {error && <ErrorComponent error={errorMessage} />}
                        </Form>
                    </LoginContent>
                </LoginContainer>
            </Container>

            <Footer />
        </>
    );
};

export default Login;
