import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../services/api';

interface IData {
    id: number;
    nome: string;
    username: string;
    email: string;
}

interface IUserContext {
    data: IData;
    isLogged: boolean;
    loading: boolean;
    error: string;
    userLogin(user: string, password: string): void;
    userLogout(): void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IData>({} as IData);
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const getUser = useCallback(async (token: string) => {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
        setIsLogged(true);
    }, []);

    const userLogin = useCallback(
        async (username: string, password: string) => {
            try {
                setError('');
                setLoading(true);

                const { url, options } = TOKEN_POST({ username, password });
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error('Problema na autenticação');
                }

                const { token } = await response.json();
                window.localStorage.setItem('token', token);
                await getUser(token);

                history.push('/conta');
            } catch (err) {
                setError(err.message);
                setIsLogged(false);
            } finally {
                setLoading(false);
            }
        },
        [getUser, history],
    );

    const userLogout = useCallback(() => {
        setData({} as IData);
        setError('');
        setLoading(false);
        setIsLogged(false);
        window.localStorage.removeItem('token');
    }, []);

    useEffect(() => {
        async function autoLogin(): Promise<void> {
            const token = window.localStorage.getItem('token');

            if (token) {
                try {
                    setError('');
                    setLoading(true);

                    const { url, options } = TOKEN_VALIDATE_POST(token);

                    const response = await fetch(url, options);

                    if (!response.ok) {
                        throw new Error('Token inválido');
                    }

                    getUser(token);
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            }
        }

        autoLogin();
    }, [getUser, userLogout]);

    return (
        <UserContext.Provider
            value={{ data, isLogged, loading, error, userLogin, userLogout }}
        >
            {children}
        </UserContext.Provider>
    );
};

function useUser(): IUserContext {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useMenu must be used within a UseruProvider');
    }

    return context;
}

export { UserProvider, useUser };
