//let wall;
let ray;
let particle;

let walls = [];


function setup() {
  createCanvas(400, 400);
  
  //wall = new Boundary(100,100, 200, 300)
  for(let i = 0; i < 5; i++){
    walls.push(new Boundary(random(0, 400) ,random(0, 400), random(0, 400), random(0, 400)))
  }
  particle = new Particle();
}

function draw() {
  background(0);
  
  //wall.show()
  walls.forEach(wall => {
    //wall.show()
  })
  particle.update(mouseX, mouseY)
  particle.look(walls);
  particle.show()
  

  
 
  
  // ray.show()
  // ray.lookAt(mouseX, mouseY)
  
  
}