class MovementSkill extends Skill {

    constructor(skillName, description, manaCost, movementType) {
        super(skillName, description, manaCost);
        this.movementType = movementType;
    }

    // Method specific to movementSkill, we can add others according to new skills we create.
    performMovement() {
        console.log(`${this.name} skill: Performing ${this.movementType} movement.`);
    }
}