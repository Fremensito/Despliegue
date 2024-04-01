import { AxiosInstance, AxiosResponse} from "axios"
import { TestsCounter } from "../../tests.counter"

const red = "\x1b[31m"
const green = "\x1b[32m"
const base = "limpieza"

export async function getLimpiezasId(requester: AxiosInstance, id: string){
    
    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        const limpiezaInvalida = response.data.find(l => !l.habitacion || !l.fecha)
        
        if(limpiezaInvalida)
            throw new Error()
        else{
            console.log(green, "OK - Obtener limpiezas")
            TestsCounter.testsPasados++
        }
    }
    catch(error){
        console.log(red, "ERROR - Obtener limpiezas")
    }
}

export async function getLimpiezasMalId(requester: AxiosInstance, id: string){

    let response: AxiosResponse

    try{
        response = await requester.get(`${base}/${id}`)
        console.log(red, "ERROR - Mal id obtener limpiezas")
    }
    catch(error){
        console.log(green, "OK - Mal id obtener limpiezas")
        TestsCounter.testsPasados++
    }
}