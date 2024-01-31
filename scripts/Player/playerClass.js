class Player {

    constructor(x, y, width, height, name) {
        this.name = name;
        this.skills = [];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.jumpVelocity = 10;
        this.isGrounded;
        this.isJumping;
        this.tempY = y;
        this.jumpTreshold = y - 200;
    }

    movement() {
        //sets isGrounded to true if player is touching the ground
        if (this.y < canvasHeight - this.height) {
            this.isGrounded = false;
        } else {
            this.isGrounded = true;
        }
        //checks if the A button or left arrow, then moves the player to the left
        if (this.x > 0) {
            if (keyIsDown(65) || keyIsDown(37)) {
                this.x -= 10;
            }
        }
        //checks if the D button or right arrow, then moves the player to the right
        if (this.x < canvasWidth - this.width) {
            if (keyIsDown(68) || keyIsDown(39)) {
                player.x += 10;
            }
        }
        //checks if the W button, up arrow or spacebar is pressed, then moves the player up using the jump function
        if (this.isGrounded || this.isJumping) {
            if(keyIsDown(87) || keyIsDown(38) || keyIsDown(32)) {
                this.doJump();
            }
        }
        //gives the player gravity if they are not on the ground
        if (!this.isGrounded && !this.isJumping) {
            this.y += 5;
        }
    }

    //sets isJumping to true, then checks every frame if the player either drops or meets a certain jumpheight treshold, then sets isJumping to false
    doJump() {
        this.isJumping = true;
        this.isGrounded = false;
        this.y -= this.jumpVelocity;
        if (this.tempY < this.y) {
            this.isJumping = false;
        }
        if (this.jumpTreshold >= this.y) {
            this.isJumping = false;
        }
        this.tempY = this.y;
    }

    // pushes the learnt skill into the skill array.
    learnSkill(skill) {
        this.skills.push(skill);
        console.log(`${this.name} learned ${skill.name}!`);
    }

    /* checks if the skill name exists in the current skills array, if not, 
    the skill doesn't work and it's logged in the console. */
    useSkill(skillName) {
        const skill = this.skills.find(skill => skill.name === skillName);
        if (skill) {
            if (skill.movementType) {
                skill.performMovement();
            }  else {
                skill.activate();
            }
        } else {
            console.log(`Skill '${skillName}' not found.`);
        }
    }
}