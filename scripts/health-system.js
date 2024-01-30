class Health {

constructor() {
    //health bar global settings
    this.startX = 10;
    this.startY = 10;
    this.maxSizeImage = 20;
    this.distanceBetweenImages = 5;
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
    this.healthBar.push(true, true, false);
    
}

show() {
    // let scaleFactor = maxSize / max(hearthFull.width, hearthFull.height);
    // let scaleWidth = hearthFull.width * scaleFactor;
    //

    for (let i = 0; i < this.healthBar.length; i++) {
        if (i < 1) {
            image(this.hearthFull, this.startPrint.x, this.startPrint.y, this.maxSizeImage, this.maxSizeImage) 
            console.log(this.startPrint.x)
        } else if (this.healthBar[i] === true) {
            image(this.hearthFull, this.startPrint.x + (i *( this.maxSizeImage + this.distanceBetweenImages)), this.startPrint.y , this.maxSizeImage, this.maxSizeImage)
        } else if (this.healthBar[i] === false) {
            image(this.hearthBlack, this.startPrint.x + (i *( this.maxSizeImage + this.distanceBetweenImages)), this.startPrint.y , this.maxSizeImage, this.maxSizeImage)
        }
        
    }
    
}


};