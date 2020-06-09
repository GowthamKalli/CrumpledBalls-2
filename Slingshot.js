class Slingshot{

    constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
       pointB:pointB,
        stiffness: 0.03,
        length:10,
        damping:0.9
    }

    this.pointB = pointB;

    this.sling = Constraint.create(options);

    World.add(world,this.sling);

    }
    display(){

        stroke("black");
        strokeWeight(3);

        if(this.sling.bodyA != null) {
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }

    fly(){
        this.sling.bodyA = null;
    }
}