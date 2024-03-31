import { AxiosInstance, AxiosResponse } from "axios"
import { validarGet } from "../resources/get.limpiezas.validacion"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza/limpia"

export async function saberLimpieza(requester: AxiosInstance, id: number){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        validarGet(response.data)
    }
    catch(error){

    }
}