class Dialogue {

    // creates dialogue based on tree and current node
    constructor(dialogueTree, treeNode) {
        this.dialogueTree = dialogueTree;
        this.treeNode = treeNode;

        // checks for advancement and change (to not spam)
        this.shouldAdvance = false;
        this.hasChanged = true;

        // sets current dialogue as active
        this.isActive = true;

        // creates advancement buttons
        this.button = createButton('1');

        this.button2 = createButton('2');

    }

    draw() {

        // if inactive, return
        if(!this.isActive) {
            return;
        }

        // functionality for advancing dialogue
        this.button.mousePressed(() => {
            this.selectOption(0);
        });

        this.button2.mousePressed(() => {
            this.selectOption(1);
        });



        // checks if dialogue has changed
        if (this.hasChanged) {
            const currentDialogue = this.dialogueTree[this.treeNode];
            console.log(`NPC: ${currentDialogue.NPC}`);
            console.log(`Text: ${currentDialogue.dialogue[0].text}`);
            console.log('Options:');
            currentDialogue.dialogue[0].options.forEach((option, index) => {
                console.log(`${index + 1}: ${option.text}`);
            });
            this.hasChanged = false;
        }
        // checks if dialogue should advance
        if (this.shouldAdvance) {
            this.advanceDialogue();
            this.shouldAdvance = false;
            this.hasChanged = true;
        }
    }

    // check which option was selected and base advancement on that
    advanceDialogue() {
        const currentDialogue = this.dialogueTree[this.treeNode];
        const selectedOption = currentDialogue.dialogue[0].options[this.selectedOptionIndex];
        if (selectedOption.next) {
            this.treeNode = selectedOption.next;
        } else {
            console.log('End of conversation.');
            this.isActive = false;
        }
    }

    // select option based on method call
    selectOption(optionIndex) {
        this.selectedOptionIndex = optionIndex;
        this.shouldAdvance = true;
    }
}