let dash;
let doubleJump;
let meditate;
let fastTravel;
let skills = [];
let skillMenuIsVisible = false;

function createSkills() {
    /**
     * Creates a skill with the added parameters.
     */
    dash = new MovementSkill("dash", "Quickly move in a direction", 10, "forward");
    doubleJump = new MovementSkill("doubleJump", "Perform an additional mid-air jump", 10, "upward");
    meditate = new Skill("meditate", "Heals the player in exchange for time in the current room", 0);
    fastTravel = new Skill("fastTravel", "Used to fast travel to other places on the map", 0);

    skills.push(dash, doubleJump, meditate, fastTravel);
}

function callUnlockableSkills() {
    return skills;
}

function toggleSkillMenu() {
    const skillMenu = document.getElementById("skillMenu");
    skillMenu.classList.toggle("hidden");

    if (!skillMenuIsVisible) {
        skillMenuIsVisible = true;
        playerSkillMenuIsVisible = false;
    } else {
        skillMenuIsVisible = false;
    }
}

function drawUnlockableSkills() {
    const skills = callUnlockableSkills();
    const slotWidth = 150;
    const slotHeight = 50;
    const margin = 20;

    // Loop through each skill and display it in a slot
    for (let i = 0; i < skills.length; i++) {
        const x = margin;
        const y = i * (slotHeight + margin) + margin;

        // Draw the slot background
        fill(200);
        rect(x, y, slotWidth, slotHeight);

        // Draw skill name and description
        fill(0);
        textAlign(LEFT, TOP);
        textSize(12);
        text(`${skills[i].name}: ${skills[i].description}`, x + 5, y + 5, slotWidth - 10, slotHeight - 10);
    }
}