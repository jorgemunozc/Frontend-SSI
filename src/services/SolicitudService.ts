import { SERVER_HOST } from '@/config';
import { get, post, update } from '@/services/ApiService';
import Estado from '@/types/enums/Estado';
import axios from 'axios';

const resource = 'solicitudes';

interface postSolicitudForm {
    razon_social: string,
    correo: string
    domicilio: string
    ciudad: string
    estado: string,
    giro: string,
    rut?: string | null
}


function getSolicitud(id: number) {
    return get<Solicitud>(resource, id);
}

function listaSolicitudes(): Promise<Solicitud> {
    return get<Solicitud>(resource);
}

function crearSolicitud(solicitud: postSolicitudForm): Promise<Solicitud> {
    if (solicitud.rut === null) {
        delete solicitud.rut
    }
    return axios.get(`${SERVER_HOST}/sanctum/csrf-cookie`).then(() => {
        return post<Solicitud>(resource, solicitud);
    });
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