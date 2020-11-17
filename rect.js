class Rect {
    constructor(x,y,width,height) {
        
        this.x=x;
        this.y=y;
        
     var options = {
         isStatic:true
     }
        this.rect=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.rect);
        this.width=width;
        this.height=height;
    }
    display() {
        push ();
        //translate();
        rectMode(CENTER);
       
         rect(this.x,this.y,this.width,this.height);
        pop ();
    }
}