class RoomManager {

    #currentRoom;
    #rooms;

    constructor() {
        this.#currentRoom = 0;
        this.#rooms = new Map();

        this.#loadRooms();
    }

    #loadRooms() {
        console.log("loading rooms.")
        this.#rooms.set('startingRoom', new Room(0));
        this.#rooms.set('room1', new Room(1));
        this.#rooms.set('room2', new Room(2));
    }

    changeRoom(roomName) {
        if(!this.#rooms.has(roomName)) {
            throw new Error(`room ${roomName} does not exist.`);
        } else {
            console.log(`changing room to ${roomName}.`);
            this.#currentRoom = this.#rooms.get(roomName);
        }
    }

    getCurrentRoom() {
        return this.#currentRoom;
    }

    draw() {
        this.#currentRoom.draw();
    }
}