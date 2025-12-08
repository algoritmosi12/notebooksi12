import { obtenerBD, GuardarElemento } from "../bbdd/BBDD.js";

const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("enviar");
const btnCrea = document.getElementById("btncrea");

const nombre = document.getElementById("nombre");
const contrasena = document.getElementById("contrasena");

const array = obtenerBD();

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    let i = 0;
    let encontrado = false;

    while (!encontrado && i < array.length) {
        if (
            array[i].user === nombre.value &&
            array[i].password === contrasena.value
        ) {
            encontrado = true;
            console.log("funciona bien, bienvenido");
            window.location.href = "../paginas/.html";
        } else {
            console.log("usuario y clave incorrecto");
        }
        i++;
    }
});

btnCrea.addEventListener("click", (e) => {
    e.preventDefault();
  window.location.href = "paginas/alta.html";

});
