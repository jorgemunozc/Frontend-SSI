import { API_HOST, SERVER_HOST } from '../config';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_HOST;

function get<T>(resource: string, id?: number): Promise<T> {
    let url = `${resource}`;
    if (typeof id !== 'undefined') {
        url += `/${id}`;
    }
    return axios.get(url).then(res => res.data.data);
}

function post<T>(resource: string, params: Object, id?: number): Promise<T> {
    let url = `${resource}`;
    console.log(id);
    if (typeof id !== 'undefined') {
        url += `/${id}`;
    }
    return axios.post(url, params).then(res => res.data.data);
}

function update(resource: String, id: String, params: Object): Promise<Object> {
    return axios.put(`${API_HOST}/${resource}/${id}`, params);
}

function deleteResource(resource: String, id: String): Promise<Object> {
    return axios.delete(`${API_HOST}/${resource}/${id}`);
}

export {get, post, update, deleteResource};