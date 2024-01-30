class Player {

    constructor(name) {
        this.name = name;
        this.skills = [];
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