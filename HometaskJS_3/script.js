const c = document.getElementById("myCanvas");


class BasicChar {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = Math.random() * (100 - 15) + 15;
        this.color = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
        this.speedX = Math.random() * 5;
        this.speedY = 5 - this.speedX;
        this.flagX = false;
        this.flagY = false;
        this.height = 600;
        this.wids = 900;
    }
}

let randNum = function () { return Math.random() * 255; };

class Circle extends BasicChar {

    constructor() {
        super();
        this.sq = Math.PI * this.radius ^ 2;
    }

    animate() {
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, this.wids, this.height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();

        this.x += this.speedX;
        this.y += this.speedY;

        console.log("radius log", this.speedY);
        console.log('Y', this.y);

        if ((this.x <= this.radius && this.flagX === true) ||
            (this.x >= this.wids - this.radius)) {
            this.speedX = -this.speedX;
            this.flagX = true;
        }
        if ((this.y <= this.radius && this.flagY === true) ||
            (this.y >= this.height - this.radius)) {
            this.speedY = -this.speedY;
            this.flagY = true;

            console.log('flagY 1', this.flagY);
        }
    }
}

function create() {
    let circle = new Circle();
    
    setInterval(() => {
        circle.animate();
    }, 25);
}

setInterval(() => {
    create();
}, 5000);




