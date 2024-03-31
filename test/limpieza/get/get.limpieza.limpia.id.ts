import { AxiosInstance, AxiosResponse } from "axios"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza/limpia"

export function saberLimpieza(requester: AxiosInstance, id: number){

    let response: AxiosResponse

    try{
        response = requester.get(`${base}/${id}`)
    }
    catch(error){

    }
}