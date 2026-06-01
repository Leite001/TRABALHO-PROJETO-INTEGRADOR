let dra, bal = [], casa;
let x = [];
let y = [];

function preload(){
    dra = loadImage('cabecadr.png');
    bal = loadImage('balao.png');
    casa = loadImage('casa-chinesa.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++)
    {
      bal[i]=[];
      bal[i][0] = random(width);
      bal[i][1] = random(height);
      bal[i][2] = random(0.2,1);
    }
}

function draw() {
  background(11, 11, 26);
  
  
//Estruturas
  stroke(255,0,0);
  strokeWeight(12);
  line(50,850,50,700);
  stroke(0);
  line(0,700,50,700);
  line(50,700,70,680);
  
  stroke(255,0,0);
  strokeWeight(12);
  line(800,850,800,700);
  line(900,850,900,700);
  stroke(0);
  line(800,700,900,700);
  line(800,700,780,680);
  line(900,700,920,680);
  
//CHUVA DE BALÃO CHINES
  
  for(let i = 0; i < 10; i++){
    
    bal[i][1]+= bal[i][2];
    
    image(bal, bal[i][0], bal[i][1], 100, 100);
    if(bal[i][1] > height)
      {
        bal[i][1] = random(-40,-10);
      }
  }
  
  
//ambiente
  image(casa, 200,570,200,250);
  image(casa, 500,570,200,250);
  image(casa, 900,570,200,250);
  noStroke();
  fill(255, 0, 71);
  
  for(let i=0;i<30;i++){
    strokeWeight(2);
    stroke(255,255,255);
  point(random(width), random(height-200));
    
  }
//dragão
  noStroke();
  circle(mouseX+60,mouseY,40);
  image(dra, mouseX - 40, mouseY - 70, 120,140);
//rastro
  x.push(mouseX+60);
  y.push(mouseY);

  if (x.length > 35) {
    x.shift();
    y.shift();
  }
  for (let i = 0; i < x.length; i++) {
    fill(255, 0, 71);
    noStroke();
    circle(x[i], y[i], 40);
  }
  

}