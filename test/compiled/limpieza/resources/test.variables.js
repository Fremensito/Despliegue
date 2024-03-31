"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limpiezaSinObservaciones = exports.limpiezaSinFecha = exports.limpiezaHabitacionNoValida = exports.limpiezaSinHabitacion = exports.limpiezaValida = exports.fecha = exports.habitacionNoHoy = exports.habitacionHoy = void 0;
exports.habitacionHoy = "test";
exports.habitacionNoHoy = "test no hoy";
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
