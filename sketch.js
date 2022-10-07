// Dados de criação da bola
var xBall = 350;
var yBall = 250;
var dBall = 13;
var raio = dBall / 2;

var speedxBall = 6;
var speedyBall = 6;

// Dados de criação da raquete
var xRacket = 5;
var yRacket = 150;
var cRacket = 10;
var aRacket = 90;

var speedyRacket = 10

// Dados de criação da raquete do oponente
var xopponentRacket = 585;
var yopponentRacket = 150;
var speedyopponentRacket;
var hit = false;


// Placar do jogo
var meuspontos = 0
var pontosdooponente = 0


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showball();
  moveball();
  collisionball();
  moveracket ();
  showracket(xRacket,yRacket);
  //collisionracket();
  hitracket(xRacket,yRacket);
  hitracket(xopponentRacket,yopponentRacket);
  showracket(xopponentRacket,yopponentRacket);
  moveopponentracket();
  placar();
  score();

  // Responsavel por mostrar a bolinha
  function showball(){
    circle (xBall,yBall,dBall)
  }
// Responsavel por movimentar a bolinha 
  function moveball(){
    xBall += speedxBall
    yBall += speedyBall
  }  
// Responsavel por colidir a bolinha com a borda
  function collisionball(){
    if (xBall + raio>width ||
       xBall - raio<0)
      speedxBall *= -1
      if (yBall+raio>height ||
         yBall-raio<0)
        speedyBall *= -1
  }
// Responsavel por mover a raquete  
  function moveracket (){
    if(keyIsDown(UP_ARROW))
      yRacket -= 10
    if(keyIsDown(DOWN_ARROW))
      yRacket += 10
  }
  // Responsavel por mostrar a raquete
  function showracket(x,y){
    rect(x,y,cRacket,aRacket)
  }
  // Responsavel por colidir a bolinha com a raquete
  function collisionracket(){
    if (xBall-raio<xRacket+cRacket &&
    yBall-raio<yRacket+aRacket &&
    yBall+raio>yRacket){
      speedxBall *= -1
  }
  }
  // Responsavel por mover a raquete da direita
  function moveopponentracket(){
    if(keyIsDown(87))
      yopponentRacket -= 10
    if(keyIsDown(83))
      yopponentRacket += 10
  }
  //Responsavel por colisão com a raquete
  function hitracket(x,y){
   hit = collideRectCircle(x, y, cRacket, aRacket, xBall, yBall, raio);
    if (hit){
      speedxBall *= -1
    }
  
  }
  //Responsavel por mostrar o placar
  function placar(){
    stroke(255)
    textAlign(CENTER)
    textSize(16)
    fill(color(255,140,0))
    rect(150, 10, 40, 20)
    fill(255)
    text(meuspontos, 170, 26)
    fill(color(255,140,0))
    rect(450, 10, 40, 20)
    fill(255)
    text(pontosdooponente, 470, 26)
  }
  // Responsavel por mostrar placar
  function score(){
  if (xBall > 590){
    meuspontos += 1;
  }
  if (xBall < 5){
    pontosdooponente += 1;
  }
}

}
