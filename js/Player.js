class Player
{
    constructor(x, y, angle)
    {
        var options = 
		{
			'restitution':0.2,
			'friction':1.0,
			'density':1.0
		}
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		Matter.Body.setAngle(this.body, angle);
		World.add(world, this.body);
        this.bullets = [];
    }

    Display()
    {   
        fill(80, 220, 120);
        push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		rect(0, 0, 50, 50);
		pop();
    }

    HandleControls()
    {
        if(keyDown("a"))
        {   
            this.body.position.x -= 2.25;
        }
        if(keyDown("w"))
        {   
            this.body.position.y -= 2.25;
        }
        if(keyDown("s"))
        {   
            this.body.position.y += 2.25;
        }
        if(keyDown("d"))
        {   
            this.body.position.x += 2.25;
        }
    }
    
    Shoot()
    {
        var mousePos = createVector(mouseX, mouseY);
        var playerPos = createVector(this.body.position.x, this.body.position.y);
        var dir = p5.Vector.sub(mousePos, playerPos);
        dir.normalize();
        var options = 
        {
            'friction': 0,
            'frictionAir': 0,
            'mass': 1e5,
            'density': 1e4
        };
        var bullet = new Bullet(playerPos.x + dir.x * 35, playerPos.y + dir.y * 35, 25, options);
        Matter.Body.setVelocity(bullet.body, Matter.Vector.create(dir.x * 40.0, dir.y * 40.0));
        this.bullets.push(bullet);
    }

    DisplayBullets()
    {
        for(var i = this.bullets.length - 1; i > 0; i--)
        {
            fill(255, 190, 140);
            this.bullets[i].Display();
            fill(255);
            var x = this.bullets[i].body.position.x;
            var y = this.bullets[i].body.position.y;
            if(x > width || y > height || x < 0 || y < 0)
            {
                World.remove(world, this.bullets[i].body);
                this.bullets.splice(i, 1);
            }
        }
    }
};