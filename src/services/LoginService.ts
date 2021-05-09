import { post } from '@/services/ApiService';
import axios from 'axios';
import { SERVER_HOST } from '../config';

function auth(credentials: object) {
    const endpoint = 'login';
    return axios.get(`${SERVER_HOST}/sanctum/csrf-cookie`).then(() =>
        post<Object>(endpoint, credentials)
    )
}

export default auth;