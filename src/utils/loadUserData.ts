/**
 * TODO: Cargar la info desde el server una sola vez y guardarla
 * en localStorage
 */
import { obtenerEmpresa } from "@/services/EmpresaService";

interface targetEmpresaObject {
  razonSocial: string,
  rut: string
}
export const obtenerDatosEmpresa = function (empresa: targetEmpresaObject) {
  obtenerEmpresa().then((res) => {
    empresa.razonSocial = res.razon_social;
    empresa.rut = `${res.rut}-${res.dv}`;
  });
};