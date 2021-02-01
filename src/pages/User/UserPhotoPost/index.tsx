import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { PHOTO_POST } from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import FileInput from '../../../components/FileInput';

import { Container, Preview } from './styles';

interface IPhotoPost {
    name: string;
    weight: string;
    age: string;
    img: File;
}

const UserPhotoPost: React.FC = () => {
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const formRef = useRef<FormHandles>(null);

    const history = useHistory();

    const handleImgChange = useCallback(
        (event: FormEvent<HTMLInputElement>) => {
            if (event.currentTarget.files) {
                setPreview(URL.createObjectURL(event.currentTarget.files[0]));
            }
        },
        [],
    );

    const handleSubmit = useCallback(
        async (data: IPhotoPost) => {
            try {
                formRef.current?.setErrors({});
                setLoading(true);
                setError('');

                const schema = Yup.object().shape({
                    name: Yup.string().required('Campo é obrigatório'),
                    weight: Yup.string().required('Campo é obrigatório'),
                    age: Yup.string().required('Compo é obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const formData = new FormData();

                formData.append('nome', data.name);
                formData.append('peso', data.weight);
                formData.append('idade', data.age);
                formData.append('idade', data.img);

                const token = window.localStorage.getItem('token');

                if (token) {
                    const { url, options } = PHOTO_POST(formData, token);

                    const response = await fetch(url, options);
                    const json = await response.json();

                    console.log(response);
                    console.log(json);

                    if (!response.ok) {
                        setError(
                            'Problema no cadastro. Verifique os campos e tente novamente!',
                        );
                    } else {
                        history.push('/conta');
                    }
                }
            } catch (err) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            } finally {
                setLoading(false);
            }
        },
        [history],
    );

    return (
        <Container className="animeLeft">
            <Form onSubmit={handleSubmit} ref={formRef}>
                <Input type="text" label="Nome" name="name" id="name" />
                <Input type="number" label="Peso" name="weight" id="weight" />
                <Input type="number" label="Idade" name="age" id="age" />
                <FileInput
                    type="file"
                    name="img"
                    id="img"
                    onChange={event => handleImgChange(event)}
                />
                {loading ? (
                    <Button disabled>Enviando...</Button>
                ) : (
                    <Button>Enviar</Button>
                )}
                {error !== '' ? <p>{error}</p> : ''}
            </Form>

            <Preview>
                {preview && (
                    <div style={{ backgroundImage: `url('${preview}')` }} />
                )}
            </Preview>
        </Container>
    );
};

export default UserPhotoPost;
