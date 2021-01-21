class Paper{
    constructor(x,y,radius){
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
        this.image = loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.radius = 70;
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        
    
    }
    display(){
      image(this.image,this.body.position.x,this.body.position.y);
      
      var pos = this.body.position;
      fill("pink")
      ellipse(pos.x,pos.y,30);

    }
    

}