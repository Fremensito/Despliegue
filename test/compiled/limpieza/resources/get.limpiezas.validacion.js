"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarGet = void 0;
var green = "\x1b[32m";
function validarGet(datos) {
    var limpiezaInvalida = datos.find(function (l) { return !l.habitacion || !l.fecha; });
    if (limpiezaInvalida)
        throw new Error();
    else
        console.log(green, "OK - Obtener limpiezas");
}
exports.validarGet = validarGet;
