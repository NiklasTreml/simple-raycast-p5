//let wall;
let ray;
let particle;

let walls = [];

function setup() {
	createCanvas(800, 400);

	// create Random walls
	for (let i = 0; i < 5; i++) {
		walls.push(
			new Boundary(
				random(0, width),
				random(0, height),
				random(0, width),
				random(0, height)
			)
		);
	}
	particle = new Particle();
}

function draw() {
	background(0);

	//wall.show()
	walls.forEach((wall) => {
		wall.show();
	});
	particle.update(mouseX, mouseY);
	particle.look(walls);
	particle.show();

	// ray.show()
}
