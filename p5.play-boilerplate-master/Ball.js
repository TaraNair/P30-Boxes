class Ball{
    constructor(x, y, width){
        var options = {
            'isStatic' : false,
            'restitution' : 0,
            'friction' : 1,
            'density' : 1.2
        }
        this.body = Bodies.circle(x, y, width/3, options);
        this.width = width;
        this.radius = width/3;
    
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill(78, 187, 171);
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
}