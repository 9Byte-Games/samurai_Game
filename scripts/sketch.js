const canvasWidth = 1280;
const canvasHeight = 720;
let player;

let health;

function preload() {
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    createPlayer("Kai"); // creates a player with the name added in the parameter
    createSkills(); // create skills to experiment with.
    frameRate(60);
    playerLearnSkill();
    console.log(callPlayerSkills())
    //create amount given health
    health = new Health(3);
}

function draw() {
    background(200);
    //print healthBar and game over if zero full health
    health.show();
    if (!health.healthBar[0]) {
        health.gameOver();
    drawPlayerSkills();
    }
}

function movement() {

}

function createPlayer(playerName) {
    player = new Player(playerName);
}


//used to test health with keypresses
// function keyPressed() {
//     if (keyCode === 74) {
//         health.damage(1);
//     } else if (keyCode === 75) {
//         health.heal(1);
//     }
// }
