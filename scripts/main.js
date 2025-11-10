import { obtenerBD,GuardarElemento } from "../bbdd/BBDD.js"
const formulario=document.getElementById("formulario")

const alta=document.getElementById("alta")


const array = obtenerBD()
formulario.enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let i = 0
    let booleano = false
    do{
        if (array[i].user == formulario.nombre.value && array[i].password == formulario.contrasena.value){
            window.location.href="../paginas/alta.html"// me reenvia a la pantalla de index2
            console.log("funciona bien bienvenido")
            booleano = true
        }
        else{
            console.log("usuario y clave incorrecto")
        }
        i++;
    }while(booleano = false && array.lenght > i)
    })



/*un do while que recorra el array hasta encontrar el json que estamos buscando cuando 
se cumpla la condicion decorte en el while mientras coincidan el usuario y la clave y entonces 
ahi se corta */












    /*if(formulausuariosio.nombre.value==user && formulario.contrasena.value==password){
        window.location.assign("index2.html")
        console.log("BIENVENIDO"+ formulario.nombre.value);
        }else{ console.log("usuario y contraseña INCORRECTA")}
    })*/


    //console.log("arribadelbotton")//bandera





/*alta.addEventListener('submit',(e)=>{
    e.preventDefault();
    let usuario={};
    usuario.nombre=alta.user.value
    usuario.contrasena = alta.pass.value
    
    for(let i=0;i>usuarios.length;i++){
        if(usuario.nombre!=usuarios[i].nombre){
            usuarios.push(usuario);
        }else{
            alta.msg.textContent="usuario YA EXISTE:("
        }
    }
    console.log();//bandera
})*/




