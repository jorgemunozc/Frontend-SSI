declare interface Usuario {
    id: number,
    correo: String,
    rol: rol,
    rutEmpresa: String,
    createdAt: date,
    updatedAt: date,
}

enum rol {
    EMPRESA,
    AUDITOR,
    ADMIN,
}