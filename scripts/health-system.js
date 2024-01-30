class Health {

    constructor() {
        //health bar global settings
        this.startX = 10;
        this.startY = 10;
        this.maxSizeImage = 20;
        this.distanceBetweenImages = 5;
        this.fullHealth = []

        //not yet made
        // this.healthBarMaxSize = 20;
        // this.healthBarRows = 2;


        //health bar starts at vectors
        this.startPrint = createVector(this.startX, this.startY);

        //needed images
        this.hearthFull = loadImage("resources/graphics/ui/health/heart full.png")
        this.hearthEmpty = loadImage("resources/graphics/ui/health/heart black.png")

        //array current health
        this.healthBar = [];
        this.healthBar.push(true, true, false)


    }

    //draws the current full and empty health
    show() {
        //tracker for print location
        let countX = 0;
        let countY = 0;

        //check boolean and print corresponding health
        for (let i = 0; i < this.healthBar.length; i++) {
            let printLocationX = this.startPrint.x + (countX * (this.maxSizeImage + this.distanceBetweenImages))
            let printLocationY = this.startPrint.y + (countY * (this.maxSizeImage + this.distanceBetweenImages))
            if (this.healthBar[i]) {
                if (i < 1) {
                    image(this.hearthFull, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage);
                    countX++
                } else {
                    image(this.hearthFull, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage);
                    countX++
                }
            }
            if (!this.healthBar[i]) {
                image(this.hearthEmpty, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage)
                countX++
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
        // rect(width / 2, height / 2, 20, 20)
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