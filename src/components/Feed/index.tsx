import React, { useCallback, useEffect, useState, MouseEvent } from 'react';

import { PHOTOS_GET, PHOTO_GET } from '../../services/api';
import Loading from '../Loading';
import Photo from '../Photo';

import { Container, FeedPhotos, FeedPhotosItem, ModalPhoto } from './styles';

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

const Feed: React.FC = () => {
    const [errorPhotos, setErrorPhotos] = useState('');
    const [_, setErrorModal] = useState('');
    const [loadingPhotos, setLoadingPhotos] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [data, setData] = useState<IPhoto[]>([]);
    const [modalPhoto, setModalPhoto] = useState<IModalPhoto>(
        {} as IModalPhoto,
    );

    useEffect(() => {
        async function fetchPhotos(): Promise<void> {
            try {
                setLoadingPhotos(true);
                setErrorPhotos('');

                const { url, options } = PHOTOS_GET({
                    page: 1,
                    total: 6,
                    user: '0',
                });

                const response = await fetch(url, options);
                setData(await response.json());

                if (!response.ok) {
                    throw new Error('Erro ao carregar feed');
                }
            } catch (err) {
                setErrorPhotos(err);
            } finally {
                setLoadingPhotos(false);
            }
        }

        fetchPhotos();
    }, []);

    const handleClickPhoto = useCallback(async (photo: IPhoto) => {
        try {
            setLoadingModal(true);
            setErrorModal('');

            const { url, options } = PHOTO_GET(photo.id);
            const response = await fetch(url, options);
            const json = await response.json();

            setModalPhoto(json);

            if (!response.ok) {
                throw new Error('Erro ao dados, tente novamente!');
            }
        } catch (err) {
            setErrorModal(err);
        } finally {
            setLoadingModal(false);
        }
    }, []);

    const handleOutsideClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
                setModalPhoto({} as IModalPhoto);
            }
        },
        [],
    );

    return (
        <>
            <Container>
                <FeedPhotos>
                    {errorPhotos !== '' && (
                        <p
                            style={{
                                color: '#f31',
                                margin: '1.6rem 0',
                            }}
                        >
                            {errorPhotos}
                        </p>
                    )}

                    {loadingPhotos && <Loading />}

                    <ul className="animeLeft">
                        {data.map(photo => (
                            <FeedPhotosItem
                                key={photo.id}
                                onClick={() => handleClickPhoto(photo)}
                            >
                                <img src={photo.src} alt={photo.title} />
                                <span>{photo.acessos}</span>
                            </FeedPhotosItem>
                        ))}
                    </ul>
                </FeedPhotos>
            </Container>

            {loadingModal && <Loading />}

            {JSON.stringify(modalPhoto) !== '{}' && (
                <ModalPhoto onClick={event => handleOutsideClick(event)}>
                    <Photo data={modalPhoto} />
                </ModalPhoto>
            )}
        </>
    );
};

export default Feed;
