import { AxiosInstance, AxiosResponse } from "axios"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza/limpias"

export async function getHabitacionesLimpias(requester: AxiosInstance){
    let response: AxiosResponse

    try{
        response = await requester.get(`${base}`)
        if(response.data.length != 0)
            console.log(green, "OK - Obtener habitaciones limpias")
        else
            throw new Error()
    }
    catch(error){
        console.log(red, "ERROR - Obtener habitaciones limpias")
    }
}