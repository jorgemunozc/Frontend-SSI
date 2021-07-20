import { get, post, deleteResource } from "@/services/ApiService";

const resource = 'dominios';

function getDominios() {
    return get<DominioCorreo[]>(resource).then(res => res);
}

function agregarDominio(dominio: string) {
    return post<DominioCorreo>(resource, { 'dominio': dominio });
}

function eliminarDominio(id: number) {
    return deleteResource(resource, id);
}

export { getDominios, agregarDominio, eliminarDominio };