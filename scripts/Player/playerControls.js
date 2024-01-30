function keyPressed() {
    if (key === 'p' || key === 'P') {
        togglePlayerSkillMenu();
    }
    if (key === 'l' || key === 'L') {
        toggleSkillMenu();
    }
    if (key === 'j' || key === 'J') {
        health.damage(1);
    } else if (key === 'k' || key === 'K') {
        health.heal(1);
    }
}

//used to test health with keypresses
/*
function keyPressed() {
    if (keyCode === 74) {
        health.damage(1);
    } else if (keyCode === 75) {
        health.heal(1);
    }
}
*/