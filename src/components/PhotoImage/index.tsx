import React, { useState, useCallback, ImgHTMLAttributes } from 'react';

import { Container } from './styles';

interface IPhotoImage extends ImgHTMLAttributes<HTMLImageElement> {
    alt: string;
}

const PhotoImage: React.FC<IPhotoImage> = ({ alt, ...rest }) => {
    const [opacity, setOpacity] = useState(0);
    const [skeleton, setSkeleton] = useState(true);

    const handleLoad = useCallback(() => {
        setSkeleton(false);
        setOpacity(1);
    }, []);

    return (
        <Container>
            {skeleton && <div className="skeleton" />}
            <img alt={alt} {...rest} onLoad={handleLoad} style={{ opacity }} />
        </Container>
    );
};

export default PhotoImage;
