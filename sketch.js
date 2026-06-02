let coel;
let imagens = [];
let cesta;
let x = 200;
let y = 200;
let velX = 3;

let ovos = [];

function preload() {
  coel = loadImage('coelho.png');
  cesta = loadImage('cesta.png')
  imagens[0] = loadImage('ovos1.png');
  imagens[1] = loadImage('ovos2.png');
  imagens[2] = loadImage('ovos3.png');
  imagens[3] = loadImage('ovos4.png');
  imagens[4] = loadImage('ovos5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(73, 152, 201);
fill(255);
  textAlign(CENTER);
  textSize(45);
  text("PÁSCOA", width / 2, 80);
  fill(73, 201, 83);
  strokeWeight(1);
  rect(0, 300, width, 200);

  // Coelho
  y = 60 * sin(x / 20) + 150;

  image(coel, x, y, 100, 100);

  x += velX;

  if (x > width - 100 || x < 0) {
    velX *= -1;
  }

  // Desenha e movimenta os ovos
  for (let i = 0; i < ovos.length; i++) {

    if (ovos[i].y < ovos[i].pararEm) {
      ovos[i].y += 4;
    }

    image(
      ovos[i].img,
      ovos[i].x,
      ovos[i].y,
      40,
      50
    );
  }
  image(cesta,20,300,50,50);
  image(cesta,500,330,50,50);
  image(cesta,800,290,50,50);

//flores
  strokeWeight(5);
  line(300,360,300,400);
  strokeWeight(1);
  fill(207, 61, 230);
  circle(300,360,20);
  
  strokeWeight(5);
  line(400,360,400,400);
  strokeWeight(1);
  fill(227, 225, 88);
  circle(400,360,20);
  
   strokeWeight(5);
  line(800,430,800,400);
  strokeWeight(1);
  fill(119, 97, 240);
  circle(800,400,20);
}

function mouseClicked() {

  let indice = floor(random(5));

  ovos.push({
    x: x + 30,
    y: y + 50,
    img: imagens[indice],
    pararEm: 250
  });

}