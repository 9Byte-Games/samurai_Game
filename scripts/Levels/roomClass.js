class Room {

    constructor(roomNumber, w, h, type) {
        this.button = createButton(`room ${roomNumber}`);
        this.button.position(100, 100);
        this.button.hide();

        this.width = w;
        this.height = h;
        this.roomType = type;
    }

    draw() {
        this.button.show();
    }
}