const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 240);
    log2 = new Log(810,220,300, PI/2);
    box5 = new Box(810, 200);
    log3 = new Log(870,150,150,-PI/4);
    log4 = new Log(750,150,150,PI/4);
    ground = new Ground(200,height,2500,40);
   
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    
    bird.display();
}