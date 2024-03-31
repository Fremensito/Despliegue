const green = "\x1b[32m"

export function validarGet(datos){
    const limpiezaInvalida = datos.find(l => !l.habitacion || !l.fecha)
        
    if(limpiezaInvalida)
        throw new Error()
    else
        console.log(green, "OK - Obtener limpiezas")
}