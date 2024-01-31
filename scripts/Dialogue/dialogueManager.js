class DialogueManager {

    #currentDialogue;
    #drawDialogue;
    #dialogues;

    constructor() {

        // initialize all dialogues here
        this.exampleDialogue;
        //this.exampleDialogue2; etc.

        this.#loadDialogue();

        this.#dialogues = new Map();
        this.#initializeDialogues();

        // initialize current dialogue
        this.#currentDialogue = null;
    }

    // load all dialogue JSON
    #loadDialogue() {
        this.exampleDialogue = loadJSON('scripts/Dialogue/dialogueJSON/dialogueExample.json');
    }

    // initialize all dialogues
    #initializeDialogues() {
        this.#dialogues.set('null', null);
        this.#dialogues.set('dialogueExample', new Dialogue(this.exampleDialogue, dialogue.dialogueExample.treeNode));
    }

    // update dialogue progression
    updateDialogueProgression(dialogueName, updatedNode) {
        dialogue[dialogueName].treeNode = updatedNode;
    }

    // call dialogue using string
    callDialogue(dialogueName) {
        if(!this.#dialogues.has(dialogueName)) {
            throw new Error(`dialog: ${dialogueName} does not exist`);
        } else {
            console.log(`dialog started: ${dialogueName}`);
            this.#currentDialogue = this.#dialogues.get(dialogueName);
        }
    }

    // draws current dialogue
    draw() {
        this.#currentDialogue.draw();
    }

}