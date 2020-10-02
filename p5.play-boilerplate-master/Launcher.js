class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10,
            
        }
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);

        this.pointB = pointB;
    }

    fly(){
        this.Launcher.bodyA = null;
    }

    attach(body){
        this.Launcher.bodyA = body;
    }

    display(){
        if(this.Launcher.bodyA){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.Launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}