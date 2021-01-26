import React from 'react';

// import { Container } from './styles';

interface IErroComponent {
    error?: string;
}

const ErrorComponent: React.FC<IErroComponent> = ({ error }) => {
    return (
        <div>
            {error ? (
                <p
                    style={{
                        color: '#f31',
                        margin: '1.6rem 0',
                    }}
                >
                    {error}
                </p>
            ) : (
                ''
            )}
        </div>
    );
};

export default ErrorComponent;
