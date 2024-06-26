"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./auth/login");
var get_limpieza_id_1 = require("./limpieza/get/get.limpieza.id");
var get_limpieza_limpia_id_1 = require("./limpieza/get/get.limpieza.limpia.id");
var get_limpieza_limpias_1 = require("./limpieza/get/get.limpieza.limpias");
var post_limpieza_1 = require("./limpieza/post/post.limpieza");
var patch_limpieza_id_1 = require("./limpieza/patch/patch.limpieza.id");
var limpiezaResource = require("./limpieza/resources/test.variables");
var axios_1 = require("axios");
var tests_counter_1 = require("./tests.counter");
var white = "\x1b[0m";
var token = "";
var limpieza;
var requester = axios_1.default.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json"
    }
});
//Variables test login
var credsIncorrectas = { login: "any", password: "any" };
var loginIncorrecto = { login: "any", password: "usuario" };
var passIncorrecto = { login: "usuario", password: "any" };
var credsCorrectas = { login: "usuario", password: "usuario" };
function loginTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, login_1.testNoAuth)(requester, credsIncorrectas, "Credenciales incorrectas")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, login_1.testNoAuth)(requester, loginIncorrecto, "Login incorrecto")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, login_1.testNoAuth)(requester, passIncorrecto, "Password incorrecto")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, login_1.testAuth)(requester, credsCorrectas)];
                case 4:
                    token = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getLimpiezasIdTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, get_limpieza_id_1.getLimpiezasMalId)(requester, "test")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, get_limpieza_id_1.getLimpiezasId)(requester, limpiezaResource.habitacionNoHoy)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function nuevaLimpiezaTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //Test de sin autorización
                return [4 /*yield*/, (0, post_limpieza_1.errorNuevaLimpieza)(requester, limpiezaResource.limpiezaValida, "No autorizado")
                    //Test con autorización
                ];
                case 1:
                    //Test de sin autorización
                    _a.sent();
                    //Test con autorización
                    requester.defaults.headers.common["authorization"] = "Bearer ".concat(token);
                    return [4 /*yield*/, (0, post_limpieza_1.errorNuevaLimpieza)(requester, limpiezaResource.limpiezaHabitacionNoValida, "Nueva limpieza con id erróneo")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, post_limpieza_1.errorNuevaLimpieza)(requester, limpiezaResource.limpiezaSinFecha, "Nueva limpieza sin fecha")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, post_limpieza_1.nuevaLimpieza)(requester, limpiezaResource.limpiezaSinObservaciones, "Nueva limpieza sin observaciones")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, post_limpieza_1.nuevaLimpieza)(requester, limpiezaResource.limpiezaValida, "Nueva limpieza")];
                case 5:
                    limpieza = _a.sent();
                    delete requester.defaults.headers.common["authorization"];
                    return [2 /*return*/];
            }
        });
    });
}
function limpiezaHabitacionTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, get_limpieza_limpia_id_1.saberLimpiezaMalId)(requester, "malID")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, get_limpieza_limpia_id_1.saberLimpiezaSucia)(requester, limpiezaResource.habitacionNoHoy)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, get_limpieza_limpia_id_1.saberLimpiezaLimpia)(requester, limpiezaResource.habitacionHoy)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function habitacionesLimpiasTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, get_limpieza_limpias_1.getHabitacionesLimpias)(requester)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function actualizarLimpiezaTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //Test sin autorización
                return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpiezaMal)(requester, limpiezaResource.limpiezaModificada, limpiezaResource.idLimpieza, "No autorizado")];
                case 1:
                    //Test sin autorización
                    _a.sent(),
                        //Test con autorización
                        requester.defaults.headers.common["authorization"] = "Bearer ".concat(token);
                    return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpiezaMal)(requester, limpiezaResource.limpiezaModificada, "error", "Id erróneo")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpiezaMal)(requester, limpiezaResource.limpiezaModificada, "65fc3f811f64471e23a88608", "Limpieza not found")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpiezaMal)(requester, limpiezaResource.limpiezaFechaErronea, limpieza._id, "Fecha errónea")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpieza)(requester, limpiezaResource.limpiezaFechaModificada, limpieza._id, "Modificación fecha")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, patch_limpieza_id_1.actualizarLimpieza)(requester, limpiezaResource.limpiezaObservacionesModificada, limpieza._id, "Modificación observaciones")];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function startTests() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(white, "Start Test Login");
                    return [4 /*yield*/, loginTest()];
                case 1:
                    _a.sent();
                    console.log(white, "Fin Test Login");
                    console.log("");
                    console.log(white, "Start Test Obtener Limpiezas por ID");
                    return [4 /*yield*/, getLimpiezasIdTest()];
                case 2:
                    _a.sent();
                    console.log(white, "Fin Test Obtener Limpiezas por ID");
                    console.log("");
                    console.log(white, "Start Test Insertar Limpieza");
                    return [4 /*yield*/, nuevaLimpiezaTest()];
                case 3:
                    _a.sent();
                    console.log(white, "Fin Test Insertar Limpieza");
                    console.log("");
                    console.log(white, "Start Test Obtener Limpieza Habitación");
                    return [4 /*yield*/, limpiezaHabitacionTest()];
                case 4:
                    _a.sent();
                    console.log(white, "Fin Test Obtener Limpieza Habitación");
                    console.log("");
                    console.log(white, "Start Test Obtener Habitaciones Limpias");
                    return [4 /*yield*/, habitacionesLimpiasTest()];
                case 5:
                    _a.sent();
                    console.log(white, "Fin Test Obtener Habitaciones Limpias");
                    console.log("");
                    console.log(white, "Start Test Modificar Limpieza");
                    return [4 /*yield*/, actualizarLimpiezaTest()];
                case 6:
                    _a.sent();
                    console.log(white, "Fin Test Actualizar Limpieza");
                    console.log("");
                    console.log(white, "TESTS APROBADOS: ".concat(tests_counter_1.TestsCounter.testsPasados, "/").concat(tests_counter_1.TestsCounter.tests));
                    return [2 /*return*/];
            }
        });
    });
}
startTests();
