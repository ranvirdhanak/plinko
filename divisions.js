class Divisions {


constructor(x,y,w,h){

   var options = {

    isStatic: true
   }

    this.body = bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);
   
}
     
     display(){

     var pos = this.body.position;
     fill("white");
     rectMode(CENTER);
     rect(pos.x,pos.y,this.w,this.h);
     
     for(var k = 0; k < divisions.length; k++) {
      
          
     divisions[k].display();
     }
    
     var divisionHeight=300;
     
     }


};