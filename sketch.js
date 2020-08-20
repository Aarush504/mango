const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;
var bird2, bird3, bird4,bird5;
var slingShot1, slingShot2, slingShot3, slingShot4;
var ground;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000,600,0.1,0.1);
    /*//platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    bird = new Bird(100,100);
    bird2 = new Bird(100,100);
    bird3 = new Bird(100,100);
    bird4 = new Bird(100,100);
    bird5 = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(bird.body, { x: 680, y: 300});
    slingShot1 = new Slingshot(bird2.body, { x: 740, y: 500});
    slingShot2 = new Slingshot(bird3.body, { x: 620, y: 540});
    slingShot3 = new Slingshot(bird4.body, { x: 500, y: 100});
    slingShot4 = new Slingshot(bird5.body, { x: 660, y: 100});1
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
  /*  box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();*/

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    //platform.display();
   // log6.display();
    slingShot.display(); 
    slingShot1.display(); 
    slingShot2.display(); 
    slingShot3.display(); 
    slingShot4.display();    
}

function mouseDragged() {

Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});

}

/*function mouseReleased() {

slingShot.fly();

}*/
