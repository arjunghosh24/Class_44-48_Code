class Application
{
    constructor()
    {
        this.state = 0;
        this.gameScore = 0;

        this.player = new Player(width/2, height - 400, 0);
        this.ground = new Wall(0, height - 30, width, 30, 0);
        this.wall1 = new Wall(0, 0, width, 30, 0);
        this.obstacleManager = new ObstacleManager();
    }

    DrawObjects()
    {
        this.player.Display();
        this.player.DisplayBullets();
        this.ground.Display();
        this.wall1.Display();
        this.DisplayScore();
    }

    DisplayScore()
    {
        textSize(32);
        fill(255);
        text(Math.round(this.gameScore), width/2, 60);
    }

    Update()
    {
        this.gameScore += deltaTime / 100.0;

        this.player.HandleControls();
        this.obstacleManager.Update(this.gameScore);
        this.DrawObjects();

        if(this.player.body.position.x < -5)
        {
            this.state = 1;
        }
    }

    ResetGame()
    {
        this.state = 0;
        this.gameScore = 0;

        this.player = new Player(width/2, height - 400);
        this.ground = new Wall(0, height - 30, width, 30, 0);
        this.wall1 = new Wall(0, 0, width, 30, 0);
        this.obstacleManager = new ObstacleManager();
    }

    End()
    {
        swal
        (
            {
                title: `Score${"\n"}${Math.round(this.gameScore)}`,
                text: "Press space to retry!",
                imageUrl:"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
                imageSize: "100x100",
                showConfirmButton: true
            }
        );

        if(keyDown(32))
        {
            this.ResetGame();
        }
    }

    HandleMousePressed()
    {
        if(this.state == 0)
        {
            this.player.Shoot();
        }
    }
}
