class Ray {
	constructor(pos, angle) {
		// create a position vector and a direction vector from passed angle
		this.pos = pos;
		this.dir = p5.Vector.fromAngle(angle);
	}

	cast(wall) {
		// formula from here
		// https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
		const x1 = wall.a.x;
		const y1 = wall.a.y;
		const x2 = wall.b.x;
		const y2 = wall.b.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x + this.dir.x;
		const y4 = this.pos.y + this.dir.y;

		//calculate t and u according to the formula

		const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		if (den === 0) {
			return;
		}
		const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
		const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

		// if 0<t>1 and u>0 a ray is intersecting a line in front of it
		if (t > 0 && t < 1 && u > 0) {
			// calculate the point of intersection from t
			// can also be calculated from u, probably no difference, who knows really
			const pt = createVector();
			pt.x = x1 + t * (x2 - x1);
			pt.y = y1 + t * (y2 - y1);
			return pt;
		} else {
			return;
		}
	}

	show() {
		// draw everything
		stroke(255);
		push();
		translate(this.pos.x, this.pos.y);
		line(0, 0, this.dir.x * 10, this.dir.y * 10);
		pop();
	}
}
