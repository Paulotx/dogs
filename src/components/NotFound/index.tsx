import React from 'react';

import { Container } from './styles';

const NotFound: React.FC = () => {
    return (
        <Container>
            <h1 className="title">Erro: 404</h1>
            <p>Página não encontrada.</p>
        </Container>
    );
};

export default NotFound;
