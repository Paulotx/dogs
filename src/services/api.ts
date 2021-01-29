export const API_URL = 'https://dogsapi.origamid.dev/json';

interface IRequestToken {
    username: string;
    password: string;
}

interface IRequestUser {
    username: string;
    email: string;
    password: string;
}

interface IResponse {
    url: string;
    options: {
        method: string;
        headers: {
            [key: string]: string;
        };
        body?: string;
    };
}

export function TOKEN_POST(body: IRequestToken): IResponse {
    return {
        url: `${API_URL}/jwt-auth/v1/token`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function TOKEN_VALIDATE_POST(token: string): IResponse {
    return {
        url: `${API_URL}/jwt-auth/v1/token/validate`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(token),
        },
    };
}

export function USER_GET(token: string): IResponse {
    return {
        url: `${API_URL}/api/user`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    };
}

export function USER_POST(body: IRequestUser): IResponse {
    return {
        url: `${API_URL}/api/user`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}
