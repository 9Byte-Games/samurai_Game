const canvasWidth = 1280;
const canvasHeight = 720;
let player;
let health;
let gameOver = false;


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

    roomManager = new RoomManager();

    roomManager.changeRoom('startingRoom');
}


function draw() {
    if (!health.healthBar[0]) {
        gameOver = true
        background(0, 20)
        health.gameOver();
    } else {
    background(200);
    //print healthBar and game over if zero full health
    health.show();
    drawPlayerSkills();
    roomManager.draw();
    }
}


function movement() {

}

function createPlayer(playerName) {
    player = new Player(playerName);
}
