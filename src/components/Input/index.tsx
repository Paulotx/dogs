import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<IInputProps> = ({ label, id, ...rest }) => {
    return (
        <Container>
            <label htmlFor={`${id}`}>{label}</label>
            <input {...rest} id={id} />
            <p>Error</p>
        </Container>
    );
};

export default Input;
