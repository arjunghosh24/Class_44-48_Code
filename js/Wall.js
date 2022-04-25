class Wall extends GameObject
{
    constructor(x, y, width, height, angle)
    {
        var options = {'isStatic': true};
        super(x, y, width, height, angle, options);
    }

    Display()
    {   
        super.Display();
    }
}