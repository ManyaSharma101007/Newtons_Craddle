
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	r1 = new Roof(400,150,250,20);
	b1 = new Ball(320,450,18);
	b2 = new Ball(360,450,18);
	b3 = new Ball(400,450,18);
	b4 = new Ball(440,450,18);
	b5 = new Ball(480,450,18);

	string1 = new String(b1.body,r1.body,-80,0);
	string2 = new String(b2.body,r1.body,-40,0);
	string3 = new String(b3.body,r1.body,0,0);
	string4 = new String(b4.body,r1.body,40,0);
	string5 = new String(b5.body,r1.body,80,0);
	

	Engine.run(engine);
  
}


function draw() {
	background(255);

  Engine.update(engine);
  rectMode(CENTER);

  r1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();

}



