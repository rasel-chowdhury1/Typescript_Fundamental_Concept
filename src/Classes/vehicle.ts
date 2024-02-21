import { isVehicle } from "../Interface/Interface";

export class Vehicle implements isVehicle{
    constructor(
        public name: string,
        private seat: number,
        readonly wheels: number
    ){}

    getSeat(){
        return this.seat;
    }

    running(){
        console.log(`vehicle name is ${this.name} and available seat ${this.seat} with wheels is ${this.wheels}`)
    }
}