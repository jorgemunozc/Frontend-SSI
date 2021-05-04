import { get, post, update } from '@/services/ApiService';

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

function listaSolicitudes() {
    return get<Solicitud[]>(resource);
}

function createSolicitud(solicitud: postSolicitudForm): Promise<Solicitud> {
    return post<Solicitud>(resource, solicitud);
}

export {
    getSolicitud,
    createSolicitud,
    listaSolicitudes,
}