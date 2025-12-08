const STORAGE_KEY = "datosLocal";

// --- GUARDAR ARRAY ---
function guardarArray(array){
    const datosString = JSON.stringify(array);
    localStorage.setItem(STORAGE_KEY, datosString);
}

// --- OBTENER BD ---
export function obtenerBD() {
    const datos = localStorage.getItem(STORAGE_KEY);

    if (datos === null) {
        const BBDD = [
            {
                user: "admin",
                password: "admin",
            }
        ];
        guardarArray(BBDD);
        return BBDD;
    }

    return JSON.parse(datos);
}

// --- GUARDAR ELEMENTO (AGREGAR USUARIO) ---
export function GuardarElemento(elemento){
    const arrayActual = obtenerBD();
    arrayActual.push(elemento);
    guardarArray(arrayActual);
    return arrayActual;
}

// --- BUSCAR USUARIO ---
export function buscarUsuario(array, usuario){
    let i = 0;
    let booleano = false;
    
    while (booleano === false && i < array.length) {
        if (array[i].user === usuario) {
            booleano = true;
        }
        i++;
    }

    return booleano;  
}

// --- ELIMINAR USUARIO (vacío por ahora) ---
export function eliminarUsuario (){
    // Implementar si lo necesitás
}
