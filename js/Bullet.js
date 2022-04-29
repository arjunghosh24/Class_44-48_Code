class Bullet
{
	constructor(x, y, radius, options) 
	{
		this.body = Bodies.circle(x, y, radius, options);
		this.radius = radius;
		World.add(world, this.body);
	}

	Display()
	{
		push();
		translate(this.body.position.x, this.body.position.y);
		ellipse(0, 0, this.radius, this.radius);
		pop();
	}
}