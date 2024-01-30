function createSkills() {
    /**
     * Creates a skill with the added parameters.
     */
    dash = new MovementSkill("dash", "Quickly move in a direction", 10, "forward");
    doubleJump = new MovementSkill("doubleJump", "Perform an additional mid-air jump", 10, "upward");
    meditate = new Skill("meditate", "Heals the player in exchange for time in the current room", 0);
}