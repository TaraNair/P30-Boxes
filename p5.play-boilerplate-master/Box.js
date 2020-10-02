class Box{
    constructor(x, y, width, height){
      var options = {
        'isStatic' : false, 
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.radius = width/2;
      this.image = loadImage("box.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    
    display(){
      if(this.body.speed > 3){
        World.remove(world, this.body);
        push();
        tint(255, this.visibility);
        this.visibility = this.visibility - 5;
        image(this.image, this.body.position.x,
         this.body.position.y, this.width, this.height);
         pop();
     }
     else{
       var pos =this.body.position;
       push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height)
      pop();
    }
    }
    }
  