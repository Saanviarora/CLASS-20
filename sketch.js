var fixedRect,movingRect, rect1, rect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1= createSprite(300,150,90,40)
  rect2=createSprite(250,400,30,50)

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(movingRect, fixedRect))
  {movingRect.shapeColor="fuchsia";
  fixedRect.shapeColor="fuchsia";


}
else if(isTouching(movingRect, rect1)){
  movingRect.shapeColor="purple";
  rect1.shapeColor="olivedrab";
}
else if(isTouching(rect2,movingRect)){
movingRect.shapeColor="cadetblue";
rect2.shapeColor="aqua";
}
else{movingRect.shapeColor="plum";
fixedRect.shapeColor="plum";
rect1.shapeColor="plum";

}
  drawSprites();
}
