class Skill {

    constructor (skillName, description, manaCost) {
        this.name = skillName;
        this.description = description;
        this.manaCost = manaCost;
    }

    // activates the skill from the player Class on method "useSkill".
    activate() {
        console.log(`${this.name} skill activated!`);
        // call method depending on the skilltype, could also refer back to something in the movementSkill class.
    }
}