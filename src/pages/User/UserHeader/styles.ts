import styled from 'styled-components';

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
    position: relative;
    padding: 0 1.6rem;

    nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.6rem;

        &.navMenu a,
        &.navMenu button {
            background: #eee;
            border-radius: 0.32rem;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            transition: 0.1s;
            cursor: pointer;
        }

        &.navMenu a:hover,
        &.navMenu a:focus,
        &.navMenu button:hover,
        &.navMenu button.focus {
            background: #fff;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333;
            outline: none;
        }

        &.navMenu a.active {
            background: #fff;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
        }

        &.navMenu .active svg > * {
            fill: #fb1;
        }

        &.navMobile {
            display: block;
            position: absolute;
            top: 70px;
            right: 0;
            padding: 0 1.6rem;
            background: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            border-radius: 0.32rem;
            transform: translateX(-10px);
            opacity: 0;
            pointer-events: none;
        }

        &.navMobileActive {
            transition: 0.3s;
            transform: initial;
            opacity: 1;
            pointer-events: initial;
            z-index: 100;
        }

        &.navMobile button {
            border-bottom: none;
        }

        &.navMobile a,
        &.navMobile button {
            display: flex;
            align-items: center;
            justify-content: initial;
            background: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid #eee;
            padding: 0.8rem 0;
            cursor: pointer;
        }

        &.navMobile a:hover svg > *,
        &.navMobile button:hover svg > * {
            fill: #fb1;
        }

        &.navMobile svg {
            margin-right: 0.8rem;
        }
    }
`;

export const MobileButton = styled.button`
    background: #eee;
    border-radius: 0.32rem;
    height: 40px;
    width: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 1.92rem;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        box-shadow: 0 6px currentColor, 0 -6px currentColor;
        transition: 0.2s ease;
    }

    &:focus,
    &:hover,
    &.mobileButtonActive {
        outline: none;
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
        color: #fb1;
    }

    &.mobileButtonActive::after {
        transform: rotate(-90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
`;
