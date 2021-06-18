const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,ball,rope;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
//boxes
    box1 = new Box(300,100,50,50);
    box2 = new Box(300,100,50,50);
    box3 = new Box(300,100,50,50);
    box4 = new Box(300,100,50,50);
    box5 = new Box(350,100,50,50);
    box6 = new Box(350,100,50,50);
    box7 = new Box(350,100,50,50);
    box8 = new Box(350,100,50,50);
    box9 = new Box(400,100,50,50);
    box10 = new Box(400,100,50,50);
    box11 = new Box(400,100,50,50);
    box12 = new Box(400,100,50,50);
    box13 = new Box(450,100,50,50);
    box14 = new Box(450,100,50,50);
    box15 = new Box(450,100,50,50);
    box16 = new Box(450,100,50,50);
    box17 = new Box(300,100,50,50);
    box18 = new Box(350,100,50,50);
    box19 = new Box(400,100,50,50);
    box20 = new Box(450,100,50,50);


    box1a = new Box(800,100,50,50);
    box2a = new Box(800,100,50,50);
    box3a = new Box(800,100,50,50);
    box4a = new Box(800,100,50,50);
    box5a = new Box(800,100,50,50);
    box6a = new Box(850,100,50,50);
    box7a = new Box(850,100,50,50);
    box8a = new Box(850,100,50,50);
    box9a = new Box(850,100,50,50);
    box10a = new Box(850,100,50,50);
    box11a = new Box(900,100,50,50);
    box12a = new Box(900,100,50,50);
    box13a = new Box(900,100,50,50);
    box14a = new Box(900,100,50,50);
    box15a = new Box(900,100,50,50);
    box16a = new Box(950,100,50,50);
    box17a = new Box(950,100,50,50);
    box18a = new Box(950,100,50,50);
    box19a = new Box(950,100,50,50);
    box20a = new Box(950,100,50,50);

    ground = new Ground(600,height,1600,20)
    ball = new Ball(600,50,50,50);
    rope = new Rope(ball.body,{x:600, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display()
    box4.display();
    box5.display();
    box6.display();
    box7.display()
    box8.display();
    box9.display();
    box10.display();
    box11.display()
    box12.display();
    box13.display();
    box14.display();
    box15.display()
    box16.display();
    box17.display();
    box18.display();
    box19.display()
    box20.display();

    box1a.display();
    box2a.display();
    box3a.display()
    box4a.display();
    box5a.display();
    box6a.display();
    box7a.display()
    box8a.display();
    box9a.display();
    box10a.display();
    box11a.display()
    box12a.display();
    box13a.display();
    box14a.display();
    box15a.display()
    box16a.display();
    box17a.display();
    box18a.display();
    box19a.display()
    box20a.display();


    ground.display();
    ball.display();
    rope.display();
}

function mouseDragged(){


  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});



}