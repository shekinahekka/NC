class Bob{
    constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:1,
			friction:0.5,
			density:1
      }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y,this.r, options);
    this.radius  = 2*r;
    World.add(world, this.body);

    }
    display(){
        var pos=this.body.position;	
        ellipseMode(RADIUS);
        //fill("magenta");
        ellipse(pos.x,pos.y,this.radius, this.radius);
    }
} ;