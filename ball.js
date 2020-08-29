class Ball{
    constructor(x,y,rad){
        var options= {
            restitution: 0.4,
			density:5,
        }

        this.body = Bodies.circle(x,y,rad,options);
        this.radius = rad;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
		push();
		translate(pos.x,pos.y);
        fill("yellow");
        ellipse(0,0,this.radius*2);
		pop();
		
		

      
      /*
      imageMode(CENTER);
      image(this.image, 0, 0, 40,40);
      pop();*/
		
    }
}