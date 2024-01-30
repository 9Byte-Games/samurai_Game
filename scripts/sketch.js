const canvasWidth = 1280;
const canvasHeight = 720;

let health;

function preload() {
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(60);
    //create amount given health
    health = new Health(3);
}

function draw() {
    background(200);
    //print healthBar and game over if zero full health
    health.show();
    if (!health.healthBar[0]) {
        health.gameOver();
    }
}

function movement() {

}


//used to test health with keypresses
// function keyPressed() {
//     if (keyCode === 74) {
//         health.damage(1);
//     } else if (keyCode === 75) {
//         health.heal(1);
//     }
// }
