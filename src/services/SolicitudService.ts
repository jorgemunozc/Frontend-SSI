import { get, post, update } from '@/services/ApiService';
import Estado from '@/types/enums/Estado';

const resource = 'solicitudes';

interface postSolicitudForm {
    razon_social: string,
    correo: string
    domicilio: string
    ciudad: string
    estado: string,
    giro: string,
}


function getSolicitud(id: number) {
    return get<Solicitud>(resource, id);
}

function listaSolicitudes(): Promise<Solicitud> {
    return get<Solicitud>(resource);
}

function crearSolicitud(solicitud: postSolicitudForm): Promise<Solicitud> {
    return post<Solicitud>(resource, solicitud);
}

function modificarSolicitud(id: number, nuevoEstado: string): Promise<any> {
    const params = {estado: ''};
    switch (nuevoEstado) {
        case Estado.APROBADO:
            params.estado = Estado.APROBADO;
            break;
        case Estado.RECHAZADO:
            params.estado = Estado.RECHAZADO;
            break;
        case Estado.PENDIENTE:
            params.estado = Estado.PENDIENTE;
            break;
        default:
            break;
    }

    return update(resource, id, params);
}

export {
    getSolicitud,
    crearSolicitud,
    listaSolicitudes,
    modificarSolicitud,
}