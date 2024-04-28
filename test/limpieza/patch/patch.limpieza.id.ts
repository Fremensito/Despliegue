import { AxiosInstance, AxiosResponse } from "axios"
import { TestsCounter } from "../../tests.counter"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza"

export async function actualizarLimpiezaMal(requester: AxiosInstance, limpieza, id: string, mensaje: string){
    
    let response: AxiosResponse

    try{
        response = await requester.put(`${base}/${id}`, limpieza)
        console.log(red, `ERROR - ${mensaje}`)
    }
    catch(error){
        console.log(green, `OK - ${mensaje}`)
        TestsCounter.testsPasados++
    }
}

export async function actualizarLimpieza(requester: AxiosInstance, limpieza, id: string, mensaje: string){
    
    let response: AxiosResponse

    try{
        response = await requester.put(`${base}/${id}`, limpieza)
        console.log(green, `OK - ${mensaje}`)
        TestsCounter.testsPasados++
    }
    catch(error){
        console.log(red, `ERROR - ${mensaje}`)
    }
}