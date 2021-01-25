import React, {
    InputHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<IInputProps> = ({ name, label, id, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleOnBlur = useCallback(() => {
        if (inputRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    const handleOnChange = useCallback(() => {
        if (inputRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    return (
        <Container>
            <label htmlFor={`${id}`}>{label}</label>
            <input
                id={id}
                ref={inputRef}
                defaultValue={defaultValue}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                {...rest}
            />
            {!isFilled && error && <p>{error}</p>}
        </Container>
    );
};

export default Input;
