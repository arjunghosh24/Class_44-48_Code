class ObstacleManager
{
    constructor()
    {
        this.obstacles = [];
    }

    Update(score)
    {
        if(frameCount % Math.round(500 / score) == 0)
        {
            this.SpawnObstacles();
        }
        this.DisplayObstacles();
    }

    SpawnObstacles()
    {
        var obstaclePos = createVector(1800, random(0, height + 60));
        var options = 
        {
            'mass': 1e5,
            'density': 1e3,
            'friction': 0,
            'frictionAir':0
        };
        var obstacle = new Obstacle(obstaclePos.x, obstaclePos.y, 30, options);
        Matter.Body.setVelocity(obstacle.body, Matter.Vector.create(-40, 0));
        this.obstacles.push(obstacle);
    }

    DisplayObstacles()
    {
        for(var i = this.obstacles.length - 1; i > 0; i--)
        {
            fill(90, 120, 255);
            this.obstacles[i].Display();
            fill(255);
            var x = this.obstacles[i].body.position.x;
            if(x < -10)
            {
                World.remove(world, this.obstacles[i].body);
                this.obstacles.splice(i, 1);
            }
        }
    }
}