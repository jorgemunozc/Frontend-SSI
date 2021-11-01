import { Rol } from "@/types/enums/Rol";
import { deleteResource, get, update } from "./ApiService";

const resource = 'usuarios';
const resourceByType = 'usuarios-por-tipo';
const permisoResource = 'permisos';

function obtenerUsuarios(tipo?: Rol) : Promise<Usuario[]> {
  if (typeof tipo === 'undefined') {
    return get<Usuario[]>(resource);
  }
  return get<Usuario[]>(resourceByType, tipo);
}

function obtenerAuditores(): Promise<Usuario[]> {
  return obtenerUsuarios(Rol.AUDITOR);
}

function obtenerUsuario(id: number): Promise<Usuario> {
  return get<Usuario>(resource, id);
}

function obtenerPermisos(id: number): Promise<Permisos> {
  const url = `${resource}/${id}/permisos`;
  return get<Permisos>(url);
}

function obtenerEmpresasVisibles(id: number): Promise<Empresa[]> {
  const url = `${resource}/${id}/empresas-visibles`;
  return get<Empresa[]>(url);
}

function actualizarPermisos(id: number, permisos: Permisos): Promise<Object> {
  return update(permisoResource, id, permisos)
}

function eliminarUsuario(id: number): Promise<Object> {
  return deleteResource(resource, id);
}

export {
  obtenerAuditores,
  obtenerUsuario,
  obtenerPermisos,
  obtenerEmpresasVisibles,
  actualizarPermisos,
  eliminarUsuario
}