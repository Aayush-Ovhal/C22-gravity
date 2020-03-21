
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,block;

var gSlider;
var RectH,RectW;
 
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    var ground_options ={
        isStatic: true
    }

    var block_options ={
        restitution: 1.0
    }

    ground = Bodies.rectangle(200,400,400,50,ground_options);
    RectH=50;
    RectW=50;
    block = Bodies.rectangle(200,100,RectW,RectH,block_options);

    World.add(world,ground);
    World.add(world,block);

   console.log(block.position.y)
 
}
 

 
function draw() {
    // Draw all the elements including the slider that 
    background(225);
    Engine.update(engine);
    fill("grey");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    fill("black");
    rect(block.position.x,block.position.y,RectW,RectH);
    //drawRect(block.position.x,block.position.y,30,50);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    text("Gravity " + fVal, 160, 50);
 
    // Use a for loop to show all the boxes

   // drawSprites();
}

function mouseClicked() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    RectW = random(10,50);
    RectH = random(10,50);

    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,400,400,50,ground_options);
    World.add(world,ground);

    var block_options ={
        restitution: 1.0
    }
    block = Bodies.rectangle(200,100,RectW,RectH,block_options);
    World.add(world,block);
 }
 

