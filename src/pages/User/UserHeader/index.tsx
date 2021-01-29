import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useUser } from '../../../hooks/user';

import { ReactComponent as Feed } from '../../../assets/feed.svg';
import { ReactComponent as Statistics } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../assets/sair.svg';

import { Container } from './styles';

const UserHeader: React.FC = () => {
    const [mobile, setMobile] = useState(false);
    const [title, setTitle] = useState('');
    const location = useLocation();

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
    }, [location]);

    const { userLogout } = useUser();

    return (
        <Container>
            <h1 className="title">{title}</h1>

            <nav>
                <NavLink to="/conta" exact activeClassName="active">
                    <Feed />
                    {mobile && 'Minhas Fotos'}
                </NavLink>

                <NavLink to="/conta/estatistica" activeClassName="active">
                    <Statistics />
                    {mobile && 'Estatíticas'}
                </NavLink>

                <NavLink to="/conta/postar" activeClassName="active">
                    <AddPhoto />
                    {mobile && 'Adicionar Foto'}
                </NavLink>

                <button type="button" onClick={userLogout}>
                    <Logout />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </Container>
    );
};

export default UserHeader;
