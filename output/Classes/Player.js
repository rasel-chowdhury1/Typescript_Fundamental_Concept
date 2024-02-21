export class Person {
    // public name: string;
    // private age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string){
    //    this.name = n;
    //    this.age = a;
    //    this.country = c
    // }
    // short this above commented code
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is play from country is ${this.country}`);
    }
}
