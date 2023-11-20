// Agrega un event listener para detectar clics en la barra del menú y activar la animación.
document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

// Selecciona las barras individuales del menú.
let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

// Función que realiza la animación del menú al ser activada por un clic.
function animacionMenu(){
    barra1.classList.toggle("fila1Animacion");
    barra3.classList.toggle("fila3Animacion");
    barra2.classList.toggle("fila2Animacion");
}