class String  {
    constructor(body1,body2,x_offset,y_offset) {

        var options = {
            bodyA : body1,
            bodyB : body2,
           // pointB : {x : this.x_offset, y : this.y_offset},
            stiffness : 0.05,
            length : 300,
            
        }
        
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.string = Matter.Constraint.create(options);
        World.add(world,this.string);
    }

    display() {
       
        if(this.string.bodyA) {

            var pt1 = this.string.bodyA.position;
            var pt2 = this.string.bodyB.position;
            strokeWeight(4);
            line(pt1.x,pt1.y,pt2.x + this.x_offset,pt2.y + this.y_offset);

        }

    }
}