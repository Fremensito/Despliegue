import { AxiosInstance, AxiosResponse} from "axios"
import { validarGet } from "../resources/get.limpiezas.validacion"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza"

export async function getLimpiezasId(requester: AxiosInstance, id: string){
    
    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        validarGet(response.data)
    }
    catch(error){
        console.log(red, "ERROR - Obtener limpiezas")
    }
}

export async function getLimpiezasWrongId(requester: AxiosInstance, id: string){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        console.log(red, "ERROR - Mal id obtener limpiezas")
    }
    catch(error){
        console.log(green, "OK - Mal id obtener limpiezas")
    }
}