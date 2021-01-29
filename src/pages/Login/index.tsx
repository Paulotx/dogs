import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import { useUser } from '../../hooks/user';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, LoginContainer, LoginContent } from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ErrorComponent from '../../components/ErrorComponent';

interface ICreateSession {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { userLogin, error, loading } = useUser();

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreateSession) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    username: Yup.string().required('Campo é obrigatório'),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                userLogin(data.username, data.password);
            } catch (err) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }
        },
        [userLogin],
    );

    return (
        <>
            <Header />

            <Container>
                <LoginContainer>
                    <LoginContent className="animeLeft">
                        <h1 className="title">Login</h1>

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

                            {loading ? (
                                <Button type="submit" disabled>
                                    Carregando...
                                </Button>
                            ) : (
                                <Button type="submit">Entrar</Button>
                            )}
                            <ErrorComponent error={error} />
                        </Form>

                        <Link to="login/perdeu">Perdeu a Senha?</Link>

                        <div>
                            <h2>Cadastre-se</h2>
                            <p>Ainda não possui conta? Cadastre-se no site.</p>
                            <Link to="login/criar">Cadastro</Link>
                        </div>
                    </LoginContent>
                </LoginContainer>
            </Container>

            <Footer />
        </>
    );
};

export default Login;
