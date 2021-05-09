import { API_HOST } from '../config';
import axios from 'axios';

function init(): void {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = API_HOST;
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

export {get, post, update, deleteResource, init as initAxios};