declare interface Usuario {
    id: number,
    correo: string,
    rol: rol,
    empresa__rut?: number,
    created_at?: date,
    updated_at?: date,
    permisos?: Permisos
}

enum rol {
    EMPRESA,
    AUDITOR,
    ADMIN,
}