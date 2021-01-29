import React, { createContext, useContext, useEffect, useState } from 'react';

interface IMediaContext {
    match: boolean;
}

const MediaContext = createContext<IMediaContext>({} as IMediaContext);

const MediaProvider: React.FC = ({ children }) => {
    const [match, setMatch] = useState(false);
    const media = '(max-width: 640px)';

    useEffect(() => {
        function changeMatch(): void {
            const { matches } = window.matchMedia(media);
            setMatch(matches);
        }

        changeMatch();
        window.addEventListener('resize', changeMatch);

        return () => window.removeEventListener('resize', changeMatch);
    }, []);

    return (
        <MediaContext.Provider value={{ match }}>
            {children}
        </MediaContext.Provider>
    );
};

function useMedia(): IMediaContext {
    const context = useContext(MediaContext);

    if (!context) {
        throw new Error('useMenu must be used within a UseruProvider');
    }

    return context;
}

export { MediaProvider, useMedia };
