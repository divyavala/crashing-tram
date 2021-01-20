const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;


var gameState = "onSling";
var bg = "images/bg.jpg";


function preload() {
   backgroundImg=loadImage(bg)
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    

       
    Engine.update(engine);
   
}

