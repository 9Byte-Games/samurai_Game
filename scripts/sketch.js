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

    //print healthBar and gameover If dead
    health.show();
    if (!health.healthBar[0]) {
        health.gameOver();
    }
}

function movement() {

}

//used to test damage with keypresses
function keyPressed() {
    if (keyCode === 74) {
        health.damage(1);
    } else if (keyCode === 75) {
        health.heal(1);
    }
}
