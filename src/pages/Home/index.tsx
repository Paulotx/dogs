import React from 'react';
import Feed from '../../components/Feed';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Feed />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
