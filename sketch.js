let letras = [];
let vidas = 3;
let puntos = 0;

function setup() {
  createCanvas(500, 500);
  // Configura la barra (jugador)
  barra = createSprite(width / 2, height - 20, 80, 10);
}

function draw() {
  background("black");

  // Mostrar los puntos
  textSize(16);
  fill(0);
  text(`Puntos: ${puntos}`, 10, 20);

  // Controlar la barra con el ratón
  barra.position.x = constrain(mouseX, barra.width / 2, width - barra.width / 2);

  // Crear nuevas letras
  if (frameCount % 30 === 0) {
    let letra = createSprite(random(20, width - 20), 0, 20, 20);
    letra.velocityY = random(2, 5); // Velocidad de caída
    letra.letra = random(['A', 'B', 'C', 'D', 'E', 'F']); // Letras aleatorias
    letras.push(letra);
  }

  // Mostrar y gestionar las letras
  for (let i = letras.length - 1; i >= 0; i--) {
    let letra = letras[i];
    fill(0);
    textAlign(CENTER, CENTER);
    text(letra.letra, letra.position.x, letra.position.y); // Dibuja la letra

    // Detectar colisiones con la barra
    if (letra.overlap(barra)) {
      puntos++;
      letra.remove(); // Eliminar letra capturada
      letras.splice(i, 1);
    } else if (letra.position.y > height) {
      // Si la letra cae fuera del lienzo
      letra.remove();
      letras.splice(i, 1);
    }
  }

  // Dibujar los sprites
  drawSprites();
}

