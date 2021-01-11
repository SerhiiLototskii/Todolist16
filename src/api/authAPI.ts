import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '6408b3a3-6577-4f97-aa9e-f7b63990ec1a'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export const authAPI = {
    me() {
        const promise = instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me');
        return promise;
    }
}

export type authMeResponseType = {
    id: number, email: string, login: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
