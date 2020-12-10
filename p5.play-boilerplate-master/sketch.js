// declaring variables
var car, wall;
var speed, weight;
var deformation;

function setup() {
  //creating canvas
  createCanvas(windowWidth,windowHeight);

  //creating car sprite and giving it its properties
  car = createSprite(0, height/2, 30, 30);
  car.velocityX = Math.round(random(30,40));
  car.shapeColor = "white";
  speed = car.velocityX;
  weight = Math.round(random(1000,2500));

  //creating wall sprite and giving it its properties
  wall = createSprite(width-200, height/2, car.width, height);
  wall.shapeColor = "brown";

  //calculating deformation
  deformation = (0.5 * weight * speed * speed) / 22500;
}

function draw() {
//giving background colour
  background(0);  

  //checking collision of car with the wall and chaging its colour acoording to deformation 
  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y < car.height/2 + wall.height/2 &&
    wall.y - car.y < car.height/2 + wall.height/2){
      car.velocityX = 0;

      if(deformation > 180){
        car.shapeColor  = "red";
      }

      else if(deformation < 180 && deformation > 100){
        car.shapeColor = "yellow";
      }

      else if(deformation < 100){
        car.shapeColor = "green";
      }
    }

    //creating sprites
  drawSprites();
}