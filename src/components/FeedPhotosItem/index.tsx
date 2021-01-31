import React from 'react';

import { IDataPhoto } from '../FeedPhotos';

import { Container } from './styles';

interface IFeedPhotoItem {
    photo: IDataPhoto;
}

const FeedPhotosItem: React.FC<IFeedPhotoItem> = ({ photo }) => {
    return (
        <Container>
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </Container>
    );
};

export default FeedPhotosItem;
