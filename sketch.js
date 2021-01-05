var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("./starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	Engine.run(engine);

}


function draw() {
	background(bgImg);

	drawSprites();

	star.x = starBody.position.x;
	star.y = starBody.position.y;
	  
	//console.log(fairy.x);
	if(star.y > 470 && fairy.x > 500 && fairy.x < 540){
		Matter.Body.setStatic(starBody, true);
	}
	
	keyPressed();

}

function keyPressed() {
	//write code here
	if(keyDown("LEFT_ARROW") && fairy.x > 0){
		fairy.x -= 5;
	}
	if(keyDown("RIGHT_ARROW") && fairy.x < 800){
		fairy.x += 5;
	}
	if(keyWentDown("DOWN_ARROW")){
		Matter.Body.setStatic(starBody, false);
		

		/*
		starBody.position.x = star.x;
		starBody.position.y = star.y;*/
		
	}
}
