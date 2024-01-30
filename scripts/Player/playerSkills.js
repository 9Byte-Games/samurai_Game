let playerSkillMenuIsVisible = false;

function playerLearnSkill() {
    /**
     * Use this to make the player learn the skill, 
     */
    player.learnSkill(dash);
    player.learnSkill(doubleJump);
    player.learnSkill(meditate);

    /**
     * use it this way to check first if the player has the skill, otherwise the skill will always activate.
     * you have to use the exact name given in the first creation of the skill to make this work.
     */
    player.useSkill("dash"); // Example on how to use Dash skill.
    player.useSkill("doubleJump"); // Example on how to use the Double Jump skill.
    player.useSkill("meditate");
}

function callPlayerSkills() {
    return player.skills;
}

function togglePlayerSkillMenu() {
    const skillMenu = document.getElementById("skillMenu");
    skillMenu.classList.toggle("hidden");

    if (!playerSkillMenuIsVisible) {
        playerSkillMenuIsVisible = true;
    } else {
        playerSkillMenuIsVisible = false;
    }
}

// Function to display skills in the menu
function drawLearnedSkills() {
    const skills = callPlayerSkills();
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

function drawPlayerSkills() {
    if (playerSkillMenuIsVisible) {
        drawLearnedSkills();
    }
    if (skillMenuIsVisible) {
        drawUnlockableSkills();
    }
}