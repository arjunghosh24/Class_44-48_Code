class Player extends GameObject 
{
    constructor(x, y)
    {
        var options = 
		{
			'restitution':1.5,
			'friction':1.0,
			'density':1.0
		}
        super(x, y, 50, 50, 0, options);
        this.bullets = [];
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

    Display()
    {   
        fill(80, 220, 120);
        super.Display();
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
        var angle = createVector(1, 0).angleBetween(dir);
        var bullet = new GameObject(playerPos.x, playerPos.y, 30, 20, angle, options);
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