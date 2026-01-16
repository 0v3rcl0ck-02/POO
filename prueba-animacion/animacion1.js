// script.js
const cuadrado = document.querySelector(".cuadrado");

function cambiarMedidas() {
  const nuevoTamaño = Math.floor(Math.random() * 200) + 100; // entre 100 y 300 px
  cuadrado.style.width = nuevoTamaño + "px";
  cuadrado.style.height = nuevoTamaño + "px";
}

setInterval(cambiarMedidas, 2000);