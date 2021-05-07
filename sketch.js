const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Stone,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Stone = new stone(200,50,50,50);
    rubber = new Rubber(300,50,70);
    Iron = new iron(300,300,50,200);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Stone.display();
    rubber.display();
    Iron.display();
    
 
}