import React from 'react';
import Feed from '../../components/Feed';

import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Head title="Fotos" />
                <Feed />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
