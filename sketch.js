const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var app;
var bgImg;

function preload() 
{
	bgImg = loadImage("assets/images/Background.jpg");
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	eng = Engine.create();
	world = eng.world;

	app = new Application(); 
}

function draw() 
{
	background(bgImg);
	Engine.update(eng);
	if(app.state === 0)
	{
		app.Update();
	}
	else if(app.state === 1)
	{
		app.End();
	}
}