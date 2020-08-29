class Bin{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        };
        
        
        this.height = h;
        this.width = w;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
	}
    display(num){
		push();
        var pos = this.body.position;
		pop();
		
        fill("blue");
        if(num === 0){
        rect(pos.x,pos.y-50,this.width,this.height);
		}
		else{
		rect(pos.x-120,pos.y,this.width,this.height);
		}
    }
}
