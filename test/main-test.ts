import { testNoAuth, testAuth } from "./auth/login";
import { getLimpiezasId, getLimpiezasWrongId } from "./limpieza/get/get.limpieza.id";
import { nuevaLimpieza, errorNuevaLimpieza } from "./limpieza/put/post.limpieza";
import * as limpiezaResource from "./limpieza/resources/test.variables"
import axios from "axios"

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

    await getLimpiezasWrongId(requester, "test")
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
}

startTests()
