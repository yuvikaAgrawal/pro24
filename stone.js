class Stone{
    constructor(x,y){
        var options={
           'restitution':0.8,
           'density':30,
           'friction':3
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
    };
    display(){
        
      
        push();
        
       translate(this.body.position.x,this.body.position.y)
        strokeWeight(4);
        stroke('white')
        fill('brown')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}