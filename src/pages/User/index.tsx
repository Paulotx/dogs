import React from 'react';
import { useLocation } from 'react-router-dom';
import Feed from '../../components/Feed';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';

import { Container } from './styles';
import { useUser } from '../../hooks/user';

const Profile: React.FC = () => {
    const { data } = useUser();

    const { pathname } = useLocation();

    return (
        <>
            <Header />
            <Container>
                <UserHeader />

                {pathname === '/conta/postar' && <UserPhotoPost />}

                {pathname === '/conta' && <Feed userId={data.id} />}
            </Container>

            <Footer />
        </>
    );
};

export default Profile;
