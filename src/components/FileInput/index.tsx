import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

interface Props {
    name: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;
const ImageInput: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [preview, setPreview] = useState(defaultValue);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',

            setValue(_: HTMLInputElement, value: string) {
                setPreview(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <input type="file" ref={inputRef} {...rest} />
        </>
    );
};
export default ImageInput;
