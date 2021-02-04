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

interface IRequestPhotos {
    page: number;
    total: number;
    user: number | undefined;
}

interface IResponse {
    url: string;
    options: {
        method: string;
        headers?: {
            [key: string]: string;
        };
        body?: string | FormData;
    };
}

interface IRequestComment {
    comment: string;
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

export function PHOTO_POST(formData: FormData, token: string): IResponse {
    return {
        url: `${API_URL}/api/photo`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        },
    };
}

export function PHOTOS_GET({ page, total, user }: IRequestPhotos): IResponse {
    return {
        url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
        },
    };
}

export function PHOTO_GET(id: number): IResponse {
    return {
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'GET',
        },
    };
}

export function COMMENT_POST(id: number, comment: IRequestComment): IResponse {
    return {
        url: `${API_URL}/api/comment/${id}`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            },
            body: JSON.stringify(comment),
        },
    };
}

export function PHOTO_DELETE(id: number): IResponse {
    return {
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            },
        },
    };
}
