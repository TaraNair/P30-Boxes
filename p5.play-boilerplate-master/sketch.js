const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3,box4, box5, box6, box7, box8, box9
var square1, square2, square3, square4, square5, square6,
square7,square8,square9;
var ground, ground1;
var launcher;
var ball;
function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(550,350,200,20);
  ground1 = new Ground(800,200,200,20);
  box1 = new Box(490, 327, 30, 30 )
  box2 = new Box(520, 327, 30, 30 )
  box3 = new Box(550, 327, 30, 30 )
  box4 = new Box(580, 327, 30, 30 )
  box5 = new Box(610, 327, 30, 30 )
  box6 = new Box(520, 298, 30, 30 )
  box7 = new Box(550, 298, 30, 30 )
  box8 = new Box(580, 298, 30, 30 )
  box9 = new Box(550, 268, 30, 30 )
  square1 = new Box(740, 178, 30, 30 )
  square2 = new Box(770, 178, 30, 30 )
  square3 = new Box(800, 178, 30, 30 )
  square4 = new Box(830, 178, 30, 30 )
  square5 = new Box(860, 178, 30, 30 )
  square6 = new Box(830, 148, 30, 30 )
  square7 = new Box(800, 148, 30, 30 )
  square8 = new Box(770, 148, 30, 30 )
  square9 = new Box(800, 118, 30, 30 )

  ball = new Ball(200, 50, 30)
  launcher = new Launcher(ball.body, {x : 200, y : 50})

}

function draw(){
  background(255);
  Engine.update(engine);
  strokeWeight(4);

  ground.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  square1.display();
  square2.display();
  square3.display();
  square4.display();
  square5.display();
  square6.display();
  square7.display();
  square8.display();
  square9.display();
 launcher.display();
  ball.display(); 

  detectCollision(ball, box1);
  detectCollision(ball, box2);
  detectCollision(ball, box3);
  detectCollision(ball, box4);
  detectCollision(ball, box5);
  detectCollision(ball, box6);
  detectCollision(ball, box7);
  detectCollision(ball, box8);
  detectCollision(ball, box9);
  detectCollision(ball, square1);
  detectCollision(ball, square2);
  detectCollision(ball, square3);
  detectCollision(ball, square4);
  detectCollision(ball, square5);
  detectCollision(ball, square6);
  detectCollision(ball, square7);
  detectCollision(ball, square8);
  detectCollision(ball, square9);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}
function detectCollision(ball, box){
  boxBodyPosition = box.body.position
  ballBodyPosition = ball.body.position

  var distance = dist(ballBodyPosition.x, ballBodyPosition.y, 
  boxBodyPosition.x, boxBodyPosition.y)

  if(distance <= box.radius + ball.radius){
    Matter.Body.setStatic(box.body, false)
  }
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(ball.body, {x: 200, y: 550});
  launcher.attach(ball.body);
}
}
