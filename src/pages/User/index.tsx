import React from 'react';
import Feed from '../../components/Feed';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container } from './styles';
import UserHeader from './UserHeader';

const Profile: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <UserHeader />
                <Feed />
            </Container>

            <Footer />
        </>
    );
};

export default Profile;
