var movingRect;
var fixedRect;
var rect1;
var rect2;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 50, 50, 20);
  fixedRect = createSprite(400, 350, 50, 50);

  rect1 = createSprite(350,30,40,15);
  rect2 = createSprite(380,320,35,25);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.velocityY = 3
  fixedRect.velocityY = -3
}

function draw() {
  background(0,0,255);  

  rect1.x = mouseX
  rect1.y = mouseY

  bounceOff(movingRect, fixedRect);
  
  if(isTouching(rect1, rect2)){
    rect1.shapeColor = "orange"
    rect2.shapeColor = "orange"
  } else{
    rect1.shapeColor = "yellow"
    rect2.shapeColor = "yellow"
  }

  drawSprites();
}

