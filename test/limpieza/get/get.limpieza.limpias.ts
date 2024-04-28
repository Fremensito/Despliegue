import { AxiosInstance, AxiosResponse } from "axios"
import { TestsCounter } from "../../tests.counter"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza/limpias"

export async function getHabitacionesLimpias(requester: AxiosInstance){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}`)

        //Como en los tests previamente se ha insertado limpieza a una habitación
        //la longitud de la lista de habitaciones limpias debería ser distinto de 0
        if(response.data.length != 0){
            console.log(green, "OK - Obtener habitaciones limpias")
            TestsCounter.testsPasados++
        }
        else
            throw new Error()
    }
    catch(error){
        console.log(red, "ERROR - Obtener habitaciones limpias")
    }
}