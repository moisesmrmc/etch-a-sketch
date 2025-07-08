const container = document.querySelector(".container");


//  queremos crear 16x16 divs, queremos crear 2 bucles, uno que entre y empiece en 1 por ejemplo y que para esa posicion 1, se creen los 16,
//  y luego cuando acabe ese bucle, lo mismo para la segunda fila...
const button = document.getElementById("changeGrid");

//  aquí pido un numero entre 1 y 100 para crear la nueva cuadrícula

button.addEventListener("click", () => {
    let respuesta;
    do{
        respuesta = prompt("¿Cuántos cuadrados por lado quieres que tenga?");
        
    }   while(respuesta < 1 || isNaN(respuesta) || respuesta == null || respuesta > 100);
    
    if (respuesta !== null) {
        crearCuadricula(respuesta); // o lo que quieras hacer con el número válido
    }

});
//  vale... ahora... tengo que borrar la cuadrícula que está hecha y hacer una nueva con el numero de cuadrados del prompt...
//  borrar si sabemos hacerlo, tendría que mirarlo pero si.
//  luego crear una con un número... claro sería hacer el bucle pero con respuesta de comparador
//  y para calcular el espaciado y demás.... entrar a la propiedad css con el dom y cambiarla de alguna manera?

crearCuadricula(16);
function crearCuadricula(num){
    container.textContent = ''; 
    const squareSize = 960 / num;
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const squares = document.createElement("div");
            squares.classList.add("square");
            container.appendChild(squares);
            squares.style.width = `${squareSize}px`;
            squares.style.height = `${squareSize}px`; 
        }
    }
    const squares = Array.from(document.querySelectorAll(".square"));
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue";
        });
    });

}



//  queremos hover effect que cuando pase por encima cambie el color
//  empezamos cambiando el color, cosa que ya se... solucionamos los problemas 1 a 1

const squares = Array.from(document.querySelectorAll(".square"));
//  por cada elemento ejecutamos el eventlistener con un "mouseenter" y cambiamos style.backgroundColor
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "blue";
    });
});




