import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import { useUser } from '../../hooks/user';

import { Container } from './styles';

const Header: React.FC = () => {
    const { data, isLogged, userLogout } = useUser();

    return (
        <Container>
            <nav>
                <Link to="/" aria-label="Dogs - Home" className="logo">
                    <Dogs />
                </Link>

                {isLogged ? (
                    <>
                        <Link to="/conta" className="login">
                            {data.nome}
                        </Link>
                        <Link to="/login" onClick={userLogout}>
                            Sair
                        </Link>
                    </>
                ) : (
                    <Link to="/login" className="login">
                        Login / Criar
                    </Link>
                )}
            </nav>
        </Container>
    );
};

export default Header;
