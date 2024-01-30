const canvasWidth = 1280;
const canvasHeight = 720;

let health;

function preload() {
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(60);
    health = new Health;
}

function draw() {
    background(200);
    fill(255);
    text("Hello World!", 10, 10);
    health.show();
}

function movement() {

}

function keyPressed() {
    if (keyCode === 74) {
        health.damage(1);
    } else if (keyCode === 75) {
        health.heal(1);
    }
}
