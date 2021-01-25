import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<IInputProps> = ({ name, label, id, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label htmlFor={`${id}`}>{label}</label>
            <input
                id={id}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            <p>Error</p>
        </Container>
    );
};

export default Input;
