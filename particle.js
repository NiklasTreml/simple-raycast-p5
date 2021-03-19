class Particle {
	constructor() {
		// create rays
		this.pos = createVector(width / 2, height / 2);
		this.rays = [];
		for (let i = 0; i < 360; i += 0.5) {
			this.rays.push(new Ray(this.pos, radians(i)));
		}
	}

	look(walls) {
		// Algorithm for checking if any rays intersect any wall
		for (let ray of this.rays) {
			let closest = null;
			let record = Infinity;

			for (let wall of walls) {
				const pt = ray.cast(wall);
				if (pt) {
					// find distance
					const d = p5.Vector.dist(this.pos, pt);
					// find if it is closer than last intersection
					if (d < record) {
						record = d;
						closest = pt;
					}
				}
			}

			if (closest) {
				// draw line to closest intersection and ellipse at that point
				line(this.pos.x, this.pos.y, closest.x, closest.y);
				ellipse(closest.x, closest.y, 4);
			}
		}
	}

	update(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	show() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 4);

		for (let ray of this.rays) {
			ray.show();
		}
	}
}
