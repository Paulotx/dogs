import React from 'react';
import { useLocation } from 'react-router-dom';
import Feed from '../../components/Feed';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';

import { Container } from './styles';

const Profile: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <>
            <Header />
            <Container>
                <UserHeader />

                {pathname === '/conta/postar' && <UserPhotoPost />}
                <Feed />
            </Container>

            <Footer />
        </>
    );
};

export default Profile;
