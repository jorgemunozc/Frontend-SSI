import { post } from '@/services/ApiService';


interface UserForm {
    correo: string,
    rut: number | null,
}

const resource = 'register';

function crearUsuario(usuario: UserForm): Promise<Object> {
    return post<Object>(resource, usuario);
}

export { crearUsuario }