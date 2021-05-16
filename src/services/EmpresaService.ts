import { get, post, deleteResource } from "@/services/ApiService";

const resource = 'empresas';
const profileEndpoint = 'empresa';
function crearEmpresa(datosEmpresa: Solicitud): Promise<Empresa> {
    return post<Empresa>(resource, datosEmpresa);
}

function eliminarEmpresa(rut: number) {
    return deleteResource(resource, rut);
}

function obtenerEmpresa(): Promise<Empresa> {
    return get<Empresa>(profileEndpoint);
}
export {
    crearEmpresa,
    eliminarEmpresa,
    obtenerEmpresa,
}