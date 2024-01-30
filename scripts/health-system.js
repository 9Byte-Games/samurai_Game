/**
 * this class is used for the following parts:
 * drawing health bar
 * increasing and decreasing full health
 * game over screen and resetting the game
 */
class Health {
    //call health with starting amount of health
    constructor(health) {
        //health bar global settings
        this.startDrawingAtX = 10;
        this.startDrawingAtY = 10;
        this.maxSizeImage = 20;
        this.distanceBetweenImages = 5;
        this.healthBarMaxSize = 20;
        this.healthBarRows = 3;

        //health bar starts at vectors
        this.startDrawingAtVector = createVector(this.startDrawingAtX, this.startDrawingAtY);

        //needed images
        this.hearthFull = loadImage("resources/graphics/ui/health/heart full.png")
        this.hearthEmpty = loadImage("resources/graphics/ui/health/heart black.png")

        //array current health
        this.healthBar = [];
        for(let i = 0; i < health; i++) {
            this.healthBar.push(true)
        }
    }

    //draws the current full and empty health from the healthBar array, and places it in columns and rows using the set healthBarMaxSize and healthBarRows.
    show() {
        //tracker for print location
        let drawAtColumn = 0;
        let drawAtRow = 0;

        //check boolean and print corresponding health, depending on row lenght.
        for (let i = 0; i < this.healthBar.length; i++) {
            let nextRow = this.healthBarMaxSize / this.healthBarRows;
            if (drawAtColumn >= nextRow) {
                drawAtColumn = 0;
                drawAtRow ++;
            }
            let printLocationX = this.startDrawingAtVector.x + (drawAtColumn * (this.maxSizeImage + this.distanceBetweenImages))
            let printLocationY = this.startDrawingAtVector.y + (drawAtRow * (this.maxSizeImage + this.distanceBetweenImages))
            if (this.healthBar[i]) {
                if (i < 1) {
                    image(this.hearthFull, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage);
                    drawAtColumn++
                } else {
                    image(this.hearthFull, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage);
                    drawAtColumn++
                }
            }
            if (!this.healthBar[i]) {
                image(this.hearthEmpty, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage)
                drawAtColumn++
            }
        }

    }

    //remove full health from start of array, adds empty health at end of array
    damage(amount) {
        this.healthBar.splice(0, amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.push(false)
        }
    }

    //remove empty health from end of array, add full health to start of array
    heal(amount) {
        this.healthBar.splice(-amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.unshift(true)
        }
    }

    //add gameOver screen and button to restart game.
    gameOver() {
        console.log("test")
        fill(0, 0, 0);
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Game Over", width / 2, height / 2);
        if (!this.restartButton) {
            this.restartButton = createButton("Restart Game");
            this.restartButton.position(width / 2 -98/2, height / 2 + 16)
            this.restartButton.mousePressed(() => {
                setup();
                this.restartButton.remove();
            });
        }
    }
};