import styled from 'styled-components';

import userSvg from '../../assets/usuario.svg';

export const Container = styled.header`
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #fff;
    top: 0;

    nav {
        max-width: 80rem;
        padding: 0 1.6rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6.4rem;

        .logo {
            padding: 0.8rem 0;
        }

        .login {
            color: #333;
            display: flex;
            align-items: center;
        }

        .login::after {
            content: '';
            display: inline-block;
            width: 14px;
            height: 17px;
            background: url(${userSvg}) no-repeat center center;
            margin-left: 0.8rem;
            position: relative;
            top: -1px;
        }
    }
`;
