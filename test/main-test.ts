import { testNoAuth, testAuth } from "./auth/login";
import axios from "axios"

const white = "\x1b[0m"

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
    const token = await testAuth(requester, credsCorrectas)
    console.log(white, token)
}

async function startTests(){
    
    await loginTest()
}

startTests()
