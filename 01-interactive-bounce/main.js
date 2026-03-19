let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x;
let y;
let x_change;
let y_change;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = document.querySelector("#size-input").value;
let speed = document.querySelector("#speed-input").value;
let colorVal = document.querySelector("#color-input").value;
console.log(colorVal);

function setup() {
    //Creating a canvas to draw on, using the existing canvas element.
    createCanvas(600, 600, canvasElement);
    noStroke();
    x = width/2;
    y = height/2;
    x_change = speed;
    y_change = speed;
}

function draw() {
    background(220);

    // 3.1 Animate position
    x += x_change;
    y += y_change;

    // 3.2 Bounce logic: check the edges
    if(x <= 0 + size/2) {
        x_change = speed;
    } else if(x >= width - size/2) {
        x_change = -speed;
    }
    if(y <= 0 + size/2) {
        y_change = speed;
    } else if(y >= height - size/2) {
        y_change = -speed;
    }

    // 3.3 Draw
    color(0);
    circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging