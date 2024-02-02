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
        this.absoluteMinimumMaxHealth = 1;
        this.damageCooldown = 3000;

        //health bar starts at vectors
        this.startDrawingAtVector = createVector(this.startDrawingAtX, this.startDrawingAtY);

        //needed images
        this.hearthFull = loadImage("resources/graphics/ui/health/heart full.png")
        this.hearthEmpty = loadImage("resources/graphics/ui/health/heart black.png")

        //array current health
        this.healthBar = [];
        this.increaseMax(health);

        //last time damaged
        this.lastDamageTime = 0;
    }

    /**
     * Draws the current full and empty health from the healthBar array, uses startDrawingAtX and startDrawingAtY for starting vector
     * Columns and Rows are decided by healthBarMaxSize and healthBarRows.
     */
    show() {
        //tracker for print location
        let drawAtColumn = 0;
        let drawAtRow = 0;

        //check boolean and print corresponding health, depending on row lenght.
        for (let i = 0; i < this.healthBar.length; i++) {
            let nextRow = this.healthBarMaxSize / this.healthBarRows;
            if (drawAtColumn >= nextRow) {
                drawAtColumn = 0;
                drawAtRow++;
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

    /**
     * remove full health from start of array, adds empty health at end of array
     * @param {number} amount - Amount of damage 
     */
    damage(amount) {
        this.healthBar.splice(0, amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.push(false)
        }
        this.lastDamageTime = millis();
    }

    /**
     * checks if the time sinds lastDamageTime is longer than damageCooldown, if it is then
     * remove full health from start of array, adds empty health at end of array
     * @param {number} amount - Amount of damage received
     */
    damageWithCooldownCheck(amount) {
        if (millis() - this.lastDamageTime >= this.damageCooldown) {
            this.healthBar.splice(0, amount);
            for (let i = 0; i < amount; i++) {
                this.healthBar.push(false)
            }
            this.lastDamageTime = millis();
        } else {
            console.log("Damage is still on cooldown")
        }

    }


    /**
     * remove empty health from end of array, add full health to start of array
     * @param {number} amount - Amount of healing
     */
    heal(amount) {
        this.healthBar.splice(-amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.unshift(true)
        }
    }

    /**
     * increases max health by adding full health at the beginning of the array
     * @param {number} amount - Amount of increased max health, until the same as healthBarMaxSize.
     */
    increaseMax(amount) {
        for (let i = 0; i < amount; i++) {
            if (this.healthBar.length < this.healthBarMaxSize) {
                this.healthBar.unshift(true);
            } else {
                console.log("Max health has already reached the max size");
            }
        }
    }

    /**
     * decreases max health by removing health at the end of the array, this way empty health gets deleted first.
     * @param {number} amount - Amount of decreased max health, until absoluteMinimumMaxHealth is reached.
     */
    decreaseMax(amount) {
        for (let i = 0; i < amount; i++) {
            if (this.healthBar.length > this.absoluteMinimumMaxHealth) {
                this.healthBar.splice(-1)
            } else {
                console.log("Max health has already reached the absolute minimum");
            }
        }
    }


    /**
     * hides all buttons, add gameOver screen, and add button to restart game.
     * restart button will delete all buttons and restart game
     */
    gameOver() {
        console.log("test")
        fill(150, 0, 0);
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Game Over", width / 2, height / 2);
        //only run if restart button doenst exist yet
        if (!this.restartButton) {
            const hideButtons = document.getElementsByTagName("button");
            hideButtons.forEach(button => {
                button.remove();
                console.log("working");
            })
            this.restartButton = createButton("Restart Game");
            this.restartButton.position(width / 2 - 98 / 2, height / 2 + 16)
            this.restartButton.mousePressed(() => {
                const allButtons = document.getElementsByTagName("button");
                //made in an array  to prevent itself from updating while deleting
                const buttonArray = Array.from(allButtons);
                buttonArray.forEach(button => {
                    button.remove();
                })
                //restart game
                // setup();
                //refresh page
                location.reload();
            });
        }
    }
};