var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(400,200,80,30)
  movingrect.shapeColor="red"
  fixedrect.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<fixedrect.width/2+
  movingrect.width/2 && movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2 && fixedrect.y-movingrect.y<fixedrect.width/2+
  movingrect.width/2){
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="green"
  }
  else{
    movingrect.shapeColor="red"
  fixedrect.shapeColor="yellow"
  }
  
  drawSprites();
}