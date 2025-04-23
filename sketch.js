// Declaración del sprite
let block1;

function setup() {
  // Crea un lienzo de 400x400 píxeles
  createCanvas(400, 400);
  // Crea el sprite en la posición (20,20) con dimensiones 20x20 píxeles
  block1 = createSprite(20, 20, 20, 20);
}

function draw() {
  // Pinta el fondo de color gris claro
  background(220);
  // Dibuja todos los sprites en el lienzo
  drawSprites();
}
