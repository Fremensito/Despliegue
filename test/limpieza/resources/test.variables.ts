export interface Limpieza {
    habitacion: string, 
    fecha: Date, 
    observaciones: string
}

export const habitacionHoy = "1a1a1a1a1a1a1a1a1a1a1a1a"
export const habitacionNoHoy = "2b2b2b2b2b2b2b2b2b2b2b2b"
export const idLimpieza = "test"
export const fecha = new Date(Date())

export const limpiezaValida: Limpieza = {
    habitacion: habitacionHoy, 
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaSinHabitacion: Limpieza = {
    habitacion: "",
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaFechaErronea = {
    fecha: "error"
}

export const limpiezaFechaModificada = {
    fecha: "2024-03-01"
}

export const limpiezaObservacionesModificada = {
    observaciones: "nueva observación"
}

export const limpiezaModificada = {
    fecha: "2024-03-03",
    observaciones: "observación modificada"
}

export const limpiezaHabitacionNoValida: Limpieza = {
    habitacion: "error",
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaSinFecha = {
    habitacion: habitacionHoy,
    observaciones: "any"
}

export const limpiezaSinObservaciones: Limpieza = {
    habitacion: habitacionHoy,
    fecha: fecha,
    observaciones: ""
}
