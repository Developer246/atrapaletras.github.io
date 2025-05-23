let letras = []; // Arreglo para almacenar las letras
let vidas = 3; // Número inicial de vidas
let puntos = 0;
let fuente; // Variable para la fuente

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER, CENTER);
  fuente = "Academy Engraved LET"; // Especificamos la fuente
}

function draw() {
  background("black");

  // Mostrar los puntos y las vidas
  textFont("Academy Engraved LET");
  textSize(16);
  fill("white");
  text(`Puntos: ${puntos}`, 50, 20);
  text(`Vidas: ${vidas}`, 50, 40);

  // Crear nuevas letras
  if (frameCount % 60 === 0) { // Cada 60 fotogramas (~1 segundo)
    let letra = {
      letra: random(['A', 'B', 'C', 'D', 'E', 'F']), // Letras aleatorias
      x: random(20, width - 20), // Posición aleatoria horizontal
      y: 0, // Comienza en la parte superior del lienzo
      velocidad: random(2, 5) // Velocidad de caída
    };
    letras.push(letra);
  }

  // Mostrar y gestionar las letras
  for (let i = letras.length - 1; i >= 0; i--) {
    let letra = letras[i];
    textFont("Academy Engraved LET"); // Aplicamos la fuente a las letras
    fill("white");
    text(letra.letra, letra.x, letra.y); // Imprimir la letra

    // Mover la letra hacia abajo
    letra.y += letra.velocidad;

    // Detectar si el jugador presiona la tecla correcta
    if (keyIsPressed && key.toUpperCase() === letra.letra) {
      puntos++; // Incrementar puntos
      letras.splice(i, 1); // Eliminar letra atrapada
    } else if (letra.y > height) {
      // Si la letra cae fuera del lienzo
      vidas--; // Restar una vida
      letras.splice(i, 1); // Eliminar letra caída
    }
  }

  // Fin del juego si las vidas llegan a 0
  if (vidas <= 0) {
    textFont("Academy Engraved LET"); // También aplicamos la fuente al mensaje de fin
    textSize(32);
    fill("red");
    text("¡Game Over!", width / 2, height / 2);
    noLoop(); // Detener el juego
  }
}



