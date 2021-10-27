import { post } from '@/services/ApiService';
import axios from 'axios';
import { SERVER_HOST } from '@/config';

interface UserForm {
    correo: string,
    rut: number | null,
}

const resource = 'register';

function crearUsuario(usuario: UserForm): Promise<Object> {
    return post<Object>(resource, usuario);
}

function resetPass(correo: string) : Promise<Object> {
    return axios.get(`${SERVER_HOST}/sanctum/csrf-cookie`)
        .then(() => post('reset-pass', {correo: correo}))

}

export { crearUsuario, resetPass }