"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limpiezaSinObservaciones = exports.limpiezaSinFecha = exports.limpiezaHabitacionNoValida = exports.limpiezaModificada = exports.limpiezaObservacionesModificada = exports.limpiezaFechaModificada = exports.limpiezaFechaErronea = exports.limpiezaSinHabitacion = exports.limpiezaValida = exports.fecha = exports.idLimpieza = exports.habitacionNoHoy = exports.habitacionHoy = void 0;
exports.habitacionHoy = "test";
exports.habitacionNoHoy = "test no hoy";
exports.idLimpieza = "test";
exports.fecha = new Date(Date());
exports.limpiezaValida = {
    habitacion: "test",
    fecha: exports.fecha,
    observaciones: "any"
};
exports.limpiezaSinHabitacion = {
    habitacion: "",
    fecha: exports.fecha,
    observaciones: "any"
};
exports.limpiezaFechaErronea = {
    fecha: "error"
};
exports.limpiezaFechaModificada = {
    fecha: "2024-03-01"
};
exports.limpiezaObservacionesModificada = {
    observaciones: "nueva observación"
};
exports.limpiezaModificada = {
    fecha: "2024-03-03",
    observaciones: "observación modificada"
};
exports.limpiezaHabitacionNoValida = {
    habitacion: "error",
    fecha: exports.fecha,
    observaciones: "any"
};
exports.limpiezaSinFecha = {
    habitacion: "",
    observaciones: "any"
};
exports.limpiezaSinObservaciones = {
    habitacion: exports.habitacionHoy,
    fecha: exports.fecha,
    observaciones: ""
};
