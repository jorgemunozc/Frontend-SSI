import { post } from '@/services/ApiService';
import axios from 'axios';
import { SERVER_HOST } from '../config';
import { Rol } from '@/types/enums/Rol';
import { setCookies, unsetCookies } from '@/auth/cookies';

function getRouteForRole(rol: Rol) : string {
    let route = '';
    switch (rol) {
        case Rol.ADMIN:
        case Rol.AUDITOR:
            route = 'dashboard';
            break;
        default:
            route = 'home';
            break;
    }
    return route;
}

function auth(credentials: object): Promise<string> {
    const endpoint = 'login';
    return axios.get(`${SERVER_HOST}/sanctum/csrf-cookie`).then(() =>
        post<Rol>(`${SERVER_HOST}/${endpoint}`, credentials)
    )
    .then((rol) => {
        const redirect = getRouteForRole(rol);
        setCookies(rol)
        return redirect;
    })
}

function logout(): Promise<void>  {
    return post<Object>(`${SERVER_HOST}/logout`, {}).then(() => {
        unsetCookies();
    })
}

export default auth;
export { logout, auth }