function Ball(canvas, x, y, xspeed, yspeed) {

    var ctx = canvas.ctx(),
        W = canvas.W(),
        H = canvas.H(),
        gravity = canvas.gravity,
        bounceFactor = canvas.bounceFactor;

    this.x = x;
    this.y = y;
    this.radius = 5;
    this.color = 'rgb(' + Math.floor(y) + ',' + Math.floor(x) + ',' + Math.floor(yspeed) + ')';
    this.vx = xspeed;
    this.vy = yspeed;

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    this.update = function() {
        this.x += this.vx;
        this.y += this.vy;

        this.vy += gravity;

        if (this.y + this.radius > H) {
            this.y = H - this.radius;
            this.vy *= -bounceFactor;
            if (this.vy > -1.6) {
                this.vy = 0;
            }
        }

        if (this.x + this.radius > W || this.x - this.radius < 0) {
            this.vx *= -bounceFactor;
        }

    };
}

export default Ball;
