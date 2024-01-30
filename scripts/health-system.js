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
        this.hearthEmpty = loadImage("resources/graphics/ui/health/heart empty.png")
        this.hearthBlack = loadImage("resources/graphics/ui/health/heart black.png")

        //array current health
        this.healthBar = [];
        this.healthBar.push(true, true, false)
    }

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
                image(this.hearthBlack, printLocationX, printLocationY, this.maxSizeImage, this.maxSizeImage)
                countX++
            }
        }

    }

    //remove full health, add empty health
    damage(amount) {
        this.healthBar.splice(0, amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.push(false)
        }

        if (!this.healthBar[0]) {
            this.restartGame();
        }
    }

    //remove empty health, add full health
    heal(amount) {
        this.healthBar.splice(-amount);
        for (let i = 0; i < amount; i++) {
            this.healthBar.unshift(true)
        }
    }

    restartGame() {
        //death

        //restart game
    }
};