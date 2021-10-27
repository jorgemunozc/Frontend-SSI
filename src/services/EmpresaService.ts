import { get, post, deleteResource } from "@/services/ApiService";

const resource = 'empresas';
const profileEndpoint = 'empresa';
function crearEmpresa(datosEmpresa: Solicitud): Promise<Empresa> {
  return post<Empresa>(resource, datosEmpresa);
}

function eliminarEmpresa(rut: number) {
  return deleteResource(resource, rut);
}

function obtenerEmpresa(rut?: number): Promise<Empresa> {
  if (typeof rut === 'undefined') {
    return get<Empresa>(profileEndpoint);
  }
  return get<Empresa>(`${resource}/${rut}`);
}

function listaEmpresas(): Promise<Empresa[]> {
  return get<Empresa[]>(resource)
    .then(response => {
      return response
    });
}

function desactivarEmpresa(rut: number) : Promise<boolean> {
  const url = `${resource}/${rut}/desactivar`;
  return get(url);
}

function estadoEmpresa(rut: number): Promise<{estado: number}> {
  const url = `${resource}/${rut}/estado`;
  return get(url);
}

function activarEmpresa(rut: number) : Promise<boolean> {
  const url = `${resource}/${rut}/activar`;
  return get(url);
}
export {
  crearEmpresa,
  eliminarEmpresa,
  obtenerEmpresa,
  listaEmpresas,
  desactivarEmpresa,
  activarEmpresa,
  estadoEmpresa
}