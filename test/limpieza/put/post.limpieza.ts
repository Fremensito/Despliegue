import { AxiosInstance, AxiosResponse} from "axios"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza"

export async function nuevaLimpieza(requester: AxiosInstance, limpieza, mensaje){
    
    let response: AxiosResponse
    const {habitacion, fecha, observaciones} = limpieza
    try{
        response = await requester.post(`${base}`, limpieza)
        if(
            response.data.habitacion === habitacion 
            && new Date(response.data.fecha).toString() == fecha.toString()
            && response.data.observaciones === observaciones
        )
            console.log(green, `OK - ${mensaje}`)
        else
            throw new Error()
    }
    catch(error){
        console.log(red, `ERROR - ${mensaje}`)
    }
}

export async function errorNuevaLimpieza(requester: AxiosInstance, limpieza, mensaje: string){
    
    let response: AxiosInstance
    
    try{
        response = await requester.post(`${base}`, limpieza)
        console.log(red, `ERROR - ${mensaje}`)
    }
    catch(error){
        console.log(green, `OK - ${mensaje}`)
    }
}