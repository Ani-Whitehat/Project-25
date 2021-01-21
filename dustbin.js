class Dustbin{
    constructor(x,y,width,height){
        var options= {
            isStatic: true
        }
        this.image = loadImage("dustbingreen.png")
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image,this.body.position.x,this.body.position.y,55,55);
    }


}