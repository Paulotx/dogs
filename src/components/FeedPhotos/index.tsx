import React, { useEffect, useState } from 'react';
import { PHOTOS_GET } from '../../services/api';

import FeedPhotosItem from '../FeedPhotosItem';
import Loading from '../Loading';

import { Container } from './styles';

export interface IDataPhoto {
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

const FeedPhotos: React.FC = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IDataPhoto[]>([]);

    useEffect(() => {
        async function fetchPhotos(): Promise<void> {
            try {
                setLoading(true);
                setError('');

                const { url, options } = PHOTOS_GET({
                    page: 1,
                    total: 6,
                    user: '0',
                });

                const request = await fetch(url, options);
                setData(await request.json());

                if (!request.ok) {
                    throw new Error('Erro ao carregar feed');
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchPhotos();
    }, []);

    return (
        <Container>
            {error !== '' && (
                <p
                    style={{
                        color: '#f31',
                        margin: '1.6rem 0',
                    }}
                >
                    {error}
                </p>
            )}

            {loading && <Loading />}

            <ul className="animeLeft">
                {data.map(photo => (
                    <FeedPhotosItem key={photo.id} photo={photo} />
                ))}
            </ul>
        </Container>
    );
};

export default FeedPhotos;
