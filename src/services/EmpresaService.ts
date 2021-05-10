import { get, post, deleteResource } from "@/services/ApiService";

const resource = 'empresas';
function crearEmpresa(datosEmpresa: Solicitud): Promise<Empresa> {
    return post<Empresa>(resource, datosEmpresa);
}

function eliminarEmpresa(rut: number) {
    return deleteResource(resource, rut);
}

function obtenerEmpresa(rut: number | string): Promise<Empresa> {
    return get<Empresa>(resource, rut);
}
export {
    crearEmpresa,
    eliminarEmpresa,
    obtenerEmpresa,
}