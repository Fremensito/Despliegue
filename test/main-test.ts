import { testNoAuth, testAuth } from "./auth/login";
import { getLimpiezasId, getLimpiezasMalId } from "./limpieza/get/get.limpieza.id";
import { saberLimpiezaLimpia, saberLimpiezaMalId, saberLimpiezaSucia } from "./limpieza/get/get.limpieza.limpia.id";
import { getHabitacionesLimpias } from "./limpieza/get/get.limpieza.limpias";
import { nuevaLimpieza, errorNuevaLimpieza } from "./limpieza/post/post.limpieza";
import * as limpiezaResource from "./limpieza/resources/test.variables"
import axios, { AxiosInstance } from "axios"

const white = "\x1b[0m"
let token: string | void = ""

const requester = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json"
    }
})

//Variables test login
const credsIncorrectas = {login: "any", password: "any"}
const loginIncorrecto = {login: "any", password: "usuario"}
const passIncorrecto = {login: "usuario", password: "any"}
const credsCorrectas = {login: "usuario", password: "usuario"}

async function loginTest(){

    await testNoAuth(requester, credsIncorrectas, "Credenciales incorrectas")
    await testNoAuth(requester, loginIncorrecto, "Login incorrecto")
    await testNoAuth(requester, passIncorrecto, "Password incorrecto")
    token = await testAuth(requester, credsCorrectas)
}

async function getLimpiezasIdTest(){

    await getLimpiezasMalId(requester, "test")
    await getLimpiezasId(requester, "65fc3f811f64471e23a88608")
}

async function nuevaLimpiezaTest(){
    
    //Test de sin autorización
    await errorNuevaLimpieza(requester, limpiezaResource.limpiezaValida, "No autorizado")

    //Test con autorización
    requester.defaults.headers.common["authorization"] = `Bearer ${token}`

    await errorNuevaLimpieza(requester, limpiezaResource.limpiezaHabitacionNoValida, "Nueva limpieza con id erróneo")
    await errorNuevaLimpieza(requester, limpiezaResource.limpiezaSinFecha, "Nueva limpieza sin fecha")
    await nuevaLimpieza(requester, limpiezaResource.limpiezaSinObservaciones, "Nueva limpieza sin observaciones")
    await nuevaLimpieza(requester, limpiezaResource.limpiezaValida, "Nueva limpieza")
}

async function limpiezaHabitacionTest(){

    await saberLimpiezaMalId(requester, "malID")
    await saberLimpiezaSucia(requester, limpiezaResource.habitacionNoHoy)
    await saberLimpiezaLimpia(requester, limpiezaResource.habitacionHoy)
}

async function habitacionesLimpiasTest(){

    await getHabitacionesLimpias(requester)
}

async function startTests(){

    console.log(white, "Start Test Login")
    await loginTest()
    console.log(white, "Fin Test Login")
    console.log("")

    console.log(white, "Start Test Obtener Limpiezas por ID")
    await getLimpiezasIdTest()
    console.log(white, "Fin Test Obtener Limpiezas por ID")
    console.log("")

    console.log(white, "Start Test Insertar Limpieza")
    await nuevaLimpiezaTest()
    console.log(white, "Fin Test Insertar Limpieza")
    console.log("")

    console.log(white, "Start Test Obtener Limpieza Habitación")
    await limpiezaHabitacionTest()
    console.log(white, "Fin Test Obtener Limpieza Habitación")
    console.log("")

    console.log(white, "Start Test Obtener Habitaciones Limpias")
    await habitacionesLimpiasTest()
    console.log(white, "Fin Test Obtener Habitaciones Limpias")
    console.log("")
}

startTests()

