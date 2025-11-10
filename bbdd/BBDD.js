const STORAGE_KEY = "datosLocal"

export function obtenerBD(){
    const datos = localStorage.getItem(STORAGE_KEY);
    if (datos === null){
        const BBDD = [
            {
                "user" : "admin",
                "password" : "admin",
                
            }
        ];
        guardarArray(BBDD);
        return BBDD;
    }
    return JSON.parse(datos);
}


export function GuardarElemento(elemento){
    const arrayActual = obtenerBD();
    arrayActual.push(elemento);
    guardarArray(arrayActual);
    return arrayActual;

}

function guardarArray(array){
    const datosString = JSON.stringify(array);
    localStorage.setItem(STORAGE_KEY,datosString);
    return true;
}

export function buscarUsuario (array,usuario){
    let i = 0;
    let booleano = false;
    
    do {
        if (array[i].user == usuario) {
            console.log("ha entrado")
                 booleano = true;
        }
            i++;

                
    } while (booleano == false && array.length > i)
        console.log(i);
        return booleano;  
} 

export function eliminarUsuario (){

}

