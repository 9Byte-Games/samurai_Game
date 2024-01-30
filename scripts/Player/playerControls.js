function keyPressed() {
    if (key === 'p' || key === 'P') {
        togglePlayerSkillMenu();
    }
    if (key === 'l' || key === 'L') {
        toggleSkillMenu();
    }
    if(key === 'q' || key === 'Q') {
        console.log('hi')
        roomManager.changeRoom('room' + 1);
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