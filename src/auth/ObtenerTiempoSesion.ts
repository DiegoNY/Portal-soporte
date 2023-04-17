
export const ObtnerTiempoSesion = (tiempo: number) => {
    const tiempoExpiracion = new Date(tiempo * 1000);
    return tiempoExpiracion;
}