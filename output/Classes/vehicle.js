export class Vehicle {
    constructor(name, seat, wheels) {
        this.name = name;
        this.seat = seat;
        this.wheels = wheels;
    }
    getSeat() {
        return this.seat;
    }
    running() {
        console.log(`vehicle name is ${this.name} and available seat ${this.seat} with wheels is ${this.wheels}`);
    }
}
