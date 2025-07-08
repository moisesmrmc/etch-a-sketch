const container = document.querySelector(".container");


//  queremos crear 16x16 divs, queremos crear 2 bucles, uno que entre y empiece en 1 por ejemplo y que para esa posicion 1, se creen los 16,
//  y luego cuando acabe ese bucle, lo mismo para la segunda fila...

function crearDivs(){
    for (let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const squares = document.createElement("div");
            squares.classList.add("square");
            container.appendChild(squares); 
        }
    }
}
crearDivs();

//  queremos hover effect que cuando pase por encima cambie el color
//  empezamos cambiando el color, cosa que ya se... solucionamos los problemas 1 a 1

const squares = Array.from(document.querySelectorAll(".square"));
//  por cada elemento ejecutamos el eventlistener con un "mouseenter" y cambiamos style.backgroundColor
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "blue";
    });
});




