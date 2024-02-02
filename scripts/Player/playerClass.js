class Player {
    constructor(x, y, width, height, name) {
        this.name = name;
        this.skills = [];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isGrounded = true;
        this.isJumping = false;
        this.maxJumpHeight = 200;
        this.jumpTreshold = y - this.maxJumpHeight;
        this.dirX = 0;
        this.dirY = 0;
        this.vx = 10;
        this.vy = 10;
    }

    movement() {
        //checks if the player is touching the platform
        platforms.forEach(platform => {
            if(platform.checkCollision(this)) {
                this.vy = 0;
            }
            if(!platform.checkCollision(this)) {
                this.vy = 10;
            }
        });

        //sets isGrounded to true if player is touching the ground
        this.isGrounded = this.y >= canvasHeight - this.height;
        //checks if the A button or left arrow, then moves the player to the left
        if (this.x > 0 && (keyIsDown(65) || keyIsDown(37))) {
            this.dirX = -1;
            this.x += this.vx * this.dirX;
        }
        //checks if the D button or right arrow, then moves the player to the right
        if (this.x < canvasWidth - this.width && (keyIsDown(68) || keyIsDown(39))) {
            this.dirX = 1;
            this.x += this.vx * this.dirX;
        }
        //checks if the W button, up arrow or spacebar is pressed, then moves the player up using the jump function
        if ((this.isGrounded || this.isJumping) && (keyIsDown(87) || keyIsDown(38) || keyIsDown(32))) {
            this.dirY = -1;
            this.doJump();
        }
        //gives the player gravity if they are not on the ground
        if (!this.isGrounded && !this.isJumping) {
            this.y += this.vy;
        }
    }

    doJump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.isGrounded = false;
            this.tempY = this.y;
        }
        if (this.tempY - this.y <= this.maxJumpHeight) {
            this.y += this.vy * this.dirY;
        } else {
            this.isJumping = false;
        }
    }

    setVelocity(direction, newVelocity) {
        if (direction === 'x') {
            this.vx = newVelocity;
        } else if (direction === 'y') {
            this.vy = newVelocity;
        }
    }

    learnSkill(skill) {
        this.skills.push(skill);
        console.log(`${this.name} learned ${skill.name}!`);
    }

    useSkill(skillName) {
        const skill = this.skills.find(skill => skill.name === skillName);
        if (skill) {
            if (skill.movementType) {
                skill.performMovement();
            } else {
                skill.activate();
            }
        } else {
            console.log(`Skill '${skillName}' not found.`);
        }
    }
}