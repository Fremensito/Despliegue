import { AxiosInstance, AxiosResponse} from "axios"
import { TestsCounter } from "../tests.counter"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "auth"

export async function testNoAuth(
    requester: AxiosInstance, 
    usuario: {login: string, password:string}, 
    mensaje: string){
        
    let respuesta: AxiosResponse

    try{
        respuesta = await requester.post(`${base}/login`, usuario)
        if( respuesta.status == 200)
            console.log(red, `ERROR - ${mensaje}`)
        else 
            throw new Error()
    }
    catch(error){
        console.log(green, `OK - ${mensaje}`)
        TestsCounter.testsPasados++
    }
}

export async function testAuth(
    requester: AxiosInstance,
    usuario: {login: string, password: string},
    ): Promise<string | void>{
    
    let respuesta: AxiosResponse

    try{
        respuesta = await requester.post(`${base}/login`, usuario)
        if (respuesta.status == 201){
            if(respuesta.data.token){
                console.log(green,  "OK - Credenciales correctas")
                TestsCounter.testsPasados++
                return respuesta.data.token
            }
            else
                throw new Error()
        }
    }
    catch(error){
        console.log(red, "ERROR - Credenciales correctas")
    }
}



