class Room {

    constructor(roomNumber, w, h, type) {
        this.button = createButton(`room ${roomNumber}`);
        this.button.position(windowWidth - 100, 20); // Adjust the position here
        this.button.hide();

        this.width = w;
        this.height = h;
        this.roomType = type;
    }

    draw() {
        this.button.show();
    }
}