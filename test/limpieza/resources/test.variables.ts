export interface Limpieza {
    habitacion: string, 
    fecha: Date, 
    observaciones: string
}

export const fecha = new Date(Date())

export const limpiezaValida: Limpieza = {
    habitacion: "test", 
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaSinHabitacion: Limpieza = {
    habitacion: "",
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaHabitacionNoValida: Limpieza = {
    habitacion: "error",
    fecha: fecha,
    observaciones: "any"
}

export const limpiezaSinFecha = {
    habitacion: "",
    observaciones: "any"
}

export const limpiezaSinObservaciones: Limpieza = {
    habitacion:"test",
    fecha: fecha,
    observaciones: ""
}
