var movingRect,fixedRect
var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
  movingRect = createSprite(400,500,80,30)
  movingRect.shapeColor="red";
  movingRect.debug=true;
 // movingRect.velocityY= -2;
  //fixedRect.velocityY = 2;

  ob1=createSprite(200,300,50,50)
  ob2=createSprite(400,300,50,50)
  ob3=createSprite(600,300,50,50)
  ob4=createSprite(800,300,50,50)

  ob1.shapeColor=("green")
  ob2.shapeColor=("green")
  ob3.shapeColor=("green")
  ob4.shapeColor=("green")
}

function draw() {
  background(0);
  
ob1.x=World.mouseX;
ob1.y= World.mouseY;

if(collusion(ob1,ob4)){
 ob1.shapeColor="blue";
  ob4.shapeColor="blue";

}
else{
  ob1.shapeColor="red";
 ob4.shapeColor="red";

}


  drawSprites();
}



function bounceOff(p1,p2){
  if(p1.x - p2.x < p2.width/2 + p1.width/2 && 
    p2.x - p1.x < p2.width/2 + p1.width/2 ){
    
      p2.velocityX = p2.velocityX*(-1)
      p1.velocityX = p1.velocityX*(-1)


  }
  if(p1.y - p2.y < p2.height/2 + p1.height/2 &&
    p2.y- p1.y < p2.height/2 + p1.height/2 ){
    
      p2.velocityY = p2.velocityY*(-1)
      p1.velocityY = p1.velocityY*(-1)


 

  }
}








