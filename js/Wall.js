class Wall
{
	constructor(x, y, width, height, angle) 
	{
		this.body = Bodies.rectangle(x, y, width, height, {'isStatic': true});
		this.width = width;
		this.height = height;
		Matter.Body.setAngle(this.body, angle);
		World.add(world, this.body);
	}

	Display()
	{
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		rect(0, 0, this.width, this.height);
		pop();
	}
}