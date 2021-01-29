import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useUser } from '../../../hooks/user';

import { ReactComponent as Feed } from '../../../assets/feed.svg';
import { ReactComponent as Statistics } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../assets/sair.svg';

import { useMedia } from '../../../hooks/media';
import { Container, MobileButton } from './styles';

const UserHeader: React.FC = () => {
    const [title, setTitle] = useState('');
    const [mobileMenu, setMobileMenu] = useState(false);

    const location = useLocation();

    const mobile = useMedia();

    console.log(mobile);

    useEffect(() => {
        const { pathname } = location;

        switch (pathname) {
            case '/conta/postar':
                setTitle('Poste um foto');
                break;
            case '/conta/estatistica':
                setTitle('Estatísticas');
                break;
            default:
                setTitle('Minha Conta');
                break;
        }

        setMobileMenu(false);
    }, [location]);

    const { userLogout } = useUser();

    return (
        <Container>
            <h1 className="title">{title}</h1>

            {mobile.match && (
                <MobileButton
                    type="button"
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className={`${mobileMenu && 'mobileButtonActive'}`}
                />
            )}

            <nav
                className={`${mobile.match ? 'navMobile' : 'navMenu'} ${
                    mobileMenu && 'navMobileActive'
                }`}
            >
                <NavLink to="/conta" exact activeClassName="active">
                    <Feed />
                    {mobile.match && 'Minhas Fotos'}
                </NavLink>

                <NavLink to="/conta/estatistica" activeClassName="active">
                    <Statistics />
                    {mobile.match && 'Estatíticas'}
                </NavLink>

                <NavLink to="/conta/postar" activeClassName="active">
                    <AddPhoto />
                    {mobile.match && 'Adicionar Foto'}
                </NavLink>

                <button type="button" onClick={userLogout}>
                    <Logout />
                    {mobile.match && 'Sair'}
                </button>
            </nav>
        </Container>
    );
};

export default UserHeader;
