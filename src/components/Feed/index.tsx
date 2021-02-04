import React, { useCallback, useEffect, useState, MouseEvent } from 'react';

import { PHOTOS_GET, PHOTO_GET } from '../../services/api';
import Loading from '../Loading';
import Photo from '../Photo';
import PhotoImage from '../PhotoImage';

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

interface IFeed {
    userId?: number;
}

const Feed: React.FC<IFeed> = ({ userId }) => {
    const [errorPhotos, setErrorPhotos] = useState('');
    const [_, setErrorModal] = useState('');
    const [loadingPhotos, setLoadingPhotos] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [data, setData] = useState<IPhoto[]>([]);
    const [modalPhoto, setModalPhoto] = useState<IModalPhoto>(
        {} as IModalPhoto,
    );
    const [total, setTotal] = useState(6);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        async function fetchPhotos(): Promise<void> {
            try {
                setLoadingPhotos(true);
                setErrorPhotos('');

                const { url, options } = PHOTOS_GET({
                    page: 1,
                    total,
                    user: 0,
                });

                const response = await fetch(url, options);
                const json: [] = await response.json();

                setData(json);

                if (response && response.ok && json.length % 6 !== 0) {
                    setInfinite(false);
                }

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
    }, [total, setInfinite]);

    useEffect(() => {
        let wait = false;

        function infiniteScrollTypeWheel(): void {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                if (scroll > height * 0.75 && !wait) {
                    setTotal(total + 6);

                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        function infiniteScrollTypeScroll(): void {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                if (scroll > height * 0.75 && !wait) {
                    setTotal(total + 6);

                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel', infiniteScrollTypeWheel);
        window.addEventListener('scroll', infiniteScrollTypeScroll);

        return () => {
            window.removeEventListener('wheel', infiniteScrollTypeWheel);
            window.removeEventListener('scroll', infiniteScrollTypeScroll);
        };
    }, [infinite, total]);

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
                                <PhotoImage src={photo.src} alt={photo.title} />
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
