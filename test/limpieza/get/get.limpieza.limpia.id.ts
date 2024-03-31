import { AxiosInstance, AxiosResponse } from "axios"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza/limpia"

export async function saberLimpiezaLimpia(requester: AxiosInstance, id: string){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        if(response.data.ok !== undefined && response.data.ok === true)
            console.log(green, "OK - Obtener limpieza habitación limpia")
        else 
            throw new Error()
    }
    catch(error){
        console.log(red, "ERROR - Obtener limpieza habitación")
    }
}

export async function saberLimpiezaSucia(requester: AxiosInstance, id: string){
    
    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        if(response.data.ok !== undefined && response.data.ok === false)
            console.log(green, "OK - Obtener limpieza habitación sucia")
        else 
            throw new Error()
    }
    catch(error){
        console.log(red, "ERROR - Obtener limpieza habitación sucia")
    }
}

export async function saberLimpiezaMalId(requester: AxiosInstance, id: string){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        console.log(red, "ERROR - Obtener limpieza habitación mal id")
    }
    catch(error){
        console.log(green, "OK - Obtener limpieza habitación mal id")
    }
}