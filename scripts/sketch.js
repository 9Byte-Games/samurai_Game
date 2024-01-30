const canvasWidth = 1280;
const canvasHeight = 720;
let player;

function preload() {
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    createPlayer("Kai"); // creates a player with the name added in the parameter
    createSkills(); // create skills to experiment with.
    frameRate(60);
    playerLearnSkill();
    console.log(callPlayerSkills())
}

function draw() {
    background(200);
    fill(255);
    text("Hello World!", 10, 10);
    drawPlayerSkills();
}

function movement() {

}

function createPlayer(playerName) {
    player = new Player(playerName);
}