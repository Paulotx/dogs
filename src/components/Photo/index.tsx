import React, { useCallback, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../hooks/user';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';

import { Container } from './styles';
import { COMMENT_POST } from '../../services/api';
import ErrorComponent from '../ErrorComponent';

interface IPhoto {
    acessos: string;
    author: string;
    date: string;
    id: number;
    idade: string;
    peso: string;
    src: string;
    title: string;
    total_comments: string;
}

interface IComments {
    comment_ID: string;
    comment_agent?: string;
    comment_approved: string;
    comment_author: string;
    comment_author_IP?: string;
    comment_author_email?: string;
    comment_author_url?: string;
    comment_content: string;
    comment_date: string;
    comment_date_gmt: string;
    comment_karma?: string;
    comment_parent?: string;
    comment_post_ID: string;
    comment_type: string;
    user_id: string;
}

interface IModalPhoto {
    comments: IComments[];
    photo: IPhoto;
}

interface IData {
    data: IModalPhoto;
}

const Photo: React.FC<IData> = ({ data }) => {
    const [comment, setComment] = useState('');
    const [commentsPhoto, setCommentsPhoto] = useState(data.comments);
    const [error, setError] = useState('');

    const { photo } = data;

    const { isLogged } = useUser();

    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setError('');

            const { url, options } = COMMENT_POST(data.photo.id, { comment });

            const response = await fetch(url, options);

            if (response.ok) {
                const json = await response.json();

                setCommentsPhoto([...commentsPhoto, json]);
                setComment('');
            } else {
                setError('Insira um comentário!');
            }
        },
        [comment, data.photo.id, commentsPhoto],
    );

    return (
        <Container>
            <div className="img">
                <img src={photo.src} alt={photo.title} />
            </div>

            <div className="details">
                <div>
                    <p>
                        <Link to={`/perfil/${photo.author}`}>
                            @{photo.author}
                        </Link>
                        <span>{photo.acessos}</span>
                    </p>

                    <h1 className="title">
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>

                    <ul>
                        <li>{photo.peso} kg</li>
                        <li>
                            {photo.idade}
                            {photo.idade === '1' ? ' ano' : ' anos'}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="comments">
                <ul>
                    {commentsPhoto.map(item => {
                        return (
                            <li key={item.comment_ID}>
                                <b>{item.comment_author}: </b>
                                <span>{item.comment_content}</span>
                            </li>
                        );
                    })}
                </ul>

                {isLogged && (
                    <div className="photoComments">
                        <form onSubmit={event => handleSubmit(event)}>
                            <textarea
                                value={comment}
                                placeholder="Comente..."
                                onChange={({ target }) =>
                                    setComment(target.value)
                                }
                            />
                            <button type="submit">
                                <Enviar />
                            </button>

                            {error && <ErrorComponent error={error} />}
                        </form>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Photo;
