class Collision {
    constructor(x, y, width, height, type) {
        this.x = x; // X position of the collision
        this.y = y; // Y position of the collision
        this.width = width; // Width of the collision
        this.height = height; // Height of the collision
        this.type = type; // Type of the collision
    }

    checkCollision(player) {
        // Check if the player collides an object
        if (
            player.x < this.x + this.width &&
            player.x + player.width > this.x &&
            player.y < this.y + this.height &&
            player.y + player.height > this.y
        ) {
            // Collision detected
            console.log('collision')
            return true;
        } else {
            // No collision
            console.log('no collision')
            return false;
        }
    }
}

// Create the platforms

const platforms = [
    platform1 = new Collision(600, 600, 200, 20, 'platform'),
    platform2 = new Collision(200, 500, 200, 20, 'platform'),
]