class Ball {
    constructor(x,y,r) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.ball=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.ball);
    }
    display() {
        push ();
        //translate();
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y,this.r,this.r);
        pop ();
    }
}