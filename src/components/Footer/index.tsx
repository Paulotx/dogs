import React from 'react';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <Dogs />
            <p>Dogs - Alguns direitos reservados</p>
        </Container>
    );
};

export default Footer;
