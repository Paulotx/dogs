import React, { useEffect } from 'react';

// import { Container } from './styles';

interface IHead {
    title: string;
}

const Head: React.FC<IHead> = ({ title }) => {
    useEffect(() => {
        document.title = `${title} | Dogs`;
    }, [title]);

    return <></>;
};

export default Head;
