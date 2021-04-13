declare interface Solicitud {
    id: number,
    razonSocial: String,
    correo: String,
    direccion: String,
    ciudad: String,
    estado: Estado,
    
}

enum Estado {
    APROBADO,
    RECHAZADO,
    PENDIENTE,
}