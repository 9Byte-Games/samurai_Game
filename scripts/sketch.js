const canvasWidth = 1280;
const canvasHeight = 720;

function preload() {
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(60);
}

function draw() {
    background(200);
    fill(255);
    text("Hello World!", 10, 10);
}