import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <nav>
                <Link to="/" aria-label="Dogs - Home" className="logo">
                    <Dogs />
                </Link>
                <Link to="/login" className="login">
                    Login / Criar
                </Link>
            </nav>
        </Container>
    );
};

export default Header;
