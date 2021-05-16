import { post } from '@/services/ApiService';
import axios from 'axios';
import { SERVER_HOST } from '../config';
import { removeAdmin, removeLoggedIn } from '@/auth/unsetAuth';
function auth(credentials: object) {
    const endpoint = 'login';
    return axios.get(`${SERVER_HOST}/sanctum/csrf-cookie`).then(() =>
        post<Object>(endpoint, credentials)
    )
}

function logout(): void {
    post('logout', {}).then(() => {
        removeLoggedIn();
        removeAdmin();
    })
}

export default auth;
export { logout, auth }