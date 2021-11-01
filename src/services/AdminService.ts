import { post } from '@/services/ApiService';
import { Rol } from '@/types/enums/Rol';

const resource = 'register';
function agregarUsuario(tipo: Rol, mail: string, permisos: Permisos): Promise<Usuario> {
  const params = {rol: tipo, 'permisos': permisos, correo: mail};
  return post<Usuario>(resource, params);
}

export { agregarUsuario }