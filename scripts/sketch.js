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

    dialogueManager = new DialogueManager();
    dialogueManager.callDialogue('dialogueExample');

    // creates new Room Manager
    roomManager = new RoomManager();

    roomManager.changeRoom('startingRoom');
    createPlayer("playerOne");
}


function draw() {
    //check if gameOVer else draw game like normal
    if (!health.healthBar[0]) {
        gameOver = true
        background(0, 20)
        health.gameOver();
    } else {
    background(200);
    health.show();
    drawPlayerSkills();

    roomManager.draw();


    dialogueManager.draw();

    // Draw the platforms
    platforms.forEach(platform => {
        rect(platform.x, platform.y, platform.width, platform.height)
    });
    //creates a rectangle that displays the player (for now)
    rect(player.x, player.y, player.width, player.height);
    //draw the platforms
    console.log(platform1.x)
    player.movement();

    }
}

function createPlayer(playerName) {
    player = new Player(100, 520, 100, 200, playerName);
}
