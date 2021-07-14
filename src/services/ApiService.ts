import { API_HOST } from '../config';
import axios from 'axios';

import { removeAdmin, removeLoggedIn } from '@/auth/unsetAuth';
import router from '@/router';

function init(): void {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = API_HOST;

    axios.interceptors.response.use((response) => response, function (error) {
        const errorCode = error.response.status;
        if (errorCode === 401 || errorCode === 419) {
            removeLoggedIn();
            removeAdmin();
            router.push({ name: 'Login' });
        }
        return Promise.reject(error);
    });
}

function get<T>(resource: string, id?: number | string): Promise<T> {
    let url = `${resource}`;
    if (typeof id !== 'undefined') {
        url += `/${id}`;
    }
    return axios.get(url).then(res => res.data.data);
}

function post<T>(resource: string, params: Object, id?: number | string): Promise<T> {
    let url = `${resource}`;
    if (typeof id !== 'undefined') {
        url += `/${id}`;
    }
    return axios.post(url, params).then(res => res.data.data);
}

function update(resource: string, id: number | string, params: Object): Promise<Object> {
    const url = `${resource}/${id}`;
    return axios.put(url, params);
}

function deleteResource(resource: string, id: number | string): Promise<Object> {
    return axios.delete(`${resource}/${id}`);
}

export { get, post, update, deleteResource, init as initAxios };