const c = document.getElementById("canvas");
const f = document.getElementById("field");

let height = 500;
let width = 700;

let arr = [];

class BasicChar {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = Math.random() * (50 - 15) + 15;
        this.color = `rgb(${this.randNum()}, ${this.randNum()}, ${this.randNum()})`;
        this.speedX = Math.random();
        this.speedY = 1 - this.speedX;
        this.flagX = false;
        this.flagY = false;
    }
    randNum = () => Math.round(Math.random() * 255)
}

class Circle extends BasicChar {

    constructor() {
        super();
        this.sq = Math.round(Math.PI * this.radius * this.radius);
        this.name = "Circle";
    }

    animate() {
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();

        this.x += this.speedX;
        this.y += this.speedY;

        if ((this.x <= this.radius && this.flagX === true) ||
            (this.x >= width - this.radius)) {
            this.speedX = -this.speedX;
            this.flagX = true;
        }
        if ((this.y <= this.radius && this.flagY === true) ||
            (this.y >= height - this.radius)) {
            this.speedY = -this.speedY;
            this.flagY = true;
        }
    }
}

class Box extends BasicChar {

    constructor() {
        super();
        this.side = this.radius * 2;
        this.sq = Math.round(this.side * this.side);
        this.name = "Box";
    }

    animate() {
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.side, this.side);
        ctx.fillStyle = this.color;
        ctx.fill();

        this.x += this.speedX;
        this.y += this.speedY;

        if ((this.x <= 0 && this.flagX === true) ||
            (this.x >= width - this.side)) {
            this.speedX = -this.speedX;
            this.flagX = true;
        }
        if ((this.y <= 0 && this.flagY === true) ||
            (this.y >= height - this.side)) {
            this.speedY = -this.speedY;
            this.flagY = true;
        }
    }
}

function createCircle() {
    let circle = new Circle();
    arr.push(circle);
}
function createBox() {
    let box = new Box();
    arr.push(box);
}

let i = 0;
let createInterval = setInterval(() => {
    if (i % 2 == 0) {
        createCircle();
        i++;
    } else {
        createBox();
        i++;
    }
    if (i > 19) {
        clearInterval(createInterval);
    }
    createTableItems();
}, 5000);

let animationInterval = setInterval(() => {
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    arr.forEach(circle => circle.animate());
}, 5);

function createTableItems() {
    let table = document.getElementById("table");
    let trFigure = document.createElement("tr");
    table.appendChild(trFigure);

    let trNum = document.createElement("td");
    trNum.innerHTML = i;
    trFigure.appendChild(trNum);

    let trType = document.createElement("td");
    trType.innerHTML = arr[i - 1].name;
    trFigure.appendChild(trType);

    let trSquare = document.createElement("td");
    trSquare.innerHTML = arr[i - 1].sq;
    trFigure.appendChild(trSquare);
}