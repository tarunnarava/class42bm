class Drop{
constructor(x,y){
  var options={
    'friction':0.1,
    'restitution':0.1,
  }
this.rain=Bodies.circle(x,y,10,options);
this.radius=2;
World.add(world,this.rain);
}

  updateY(){     
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }

}

showDrop(){
noStroke();
fill("pink");
ellipseMode(RADIUS);
ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);


}

}