class Paper {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 35, options);
        this.radius = 35;
        World.add(world, this.body);
    }
    display() {
        push();
        fill(rgb(255, 0, 255));
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 35, 35);
        pop();
    }
};