//import Swal from "../sweetalert2-11.26.3/package/src/SweetAlert.js"
import Swal from "../sweetalert2-11.26.3/package/src/sweetalert2.js"
const miswal=Swal.mixin({
    confirmButtonColor:"rgba(252, 164, 164, 1)",
    confirmButtonText:"ACEPTAR"

})
 export function alerta (texto,titulo,icono){
    miswal.fire({
        title:titulo,
        text:texto,
        icon:icono
    })
 }