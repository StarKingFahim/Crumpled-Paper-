class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.6,
      }

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image = loadImage("crumpled paper.jpg");
      

      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("yellow");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };