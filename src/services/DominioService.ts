import { get } from "@/services/ApiService";

const resource = 'dominios';
function getDominios() {
    return get<DominioCorreo>(resource).then(res => res);
    // return get<string>('hola');
}


export {getDominios};