var fixedRect, movingRect,randomyrect,nomad;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  randomyrect = createSprite(1000,100,100,125);
  randomyrect.shapeColor = "blue";
  randomyrect.velocityY = random(9,5);

  nomad = createSprite(1000,500,50,150);
  nomad.shapeColor = "blue";
  nomad.velocityY = random(-9,-5);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //randomyrect.velocityY = 

  //algorith for a collision
  if (isTouchingalgorithm(movingRect,randomyrect)) {
    movingRect.shapeColor = "yellow";
    randomyrect.shapeColor = "yellow";  
  }else{
    movingRect.shapeColor = "red";
    randomyrect.shapeColor = "red";  
  }
  
  //algorithm for bounce off
  bounceoffalgorithm(nomad,randomyrect);

  drawSprites();
}