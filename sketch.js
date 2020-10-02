var fixedRect, movingRect;
var gameObject1 , gameObject2 , gameObject3 , gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(180,100,50,50);
  gameObject3 = createSprite(250,100,50,50);
  gameObject4 = createSprite(330,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject3,movingRect)){

    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }else {

    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  drawSprites();
}




  