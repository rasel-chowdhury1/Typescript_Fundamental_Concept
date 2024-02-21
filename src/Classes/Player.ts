export class Person{
    // public name: string;
    // private age: number;
    // readonly country: string;

    // constructor(n: string, a: number, c: string){
    //    this.name = n;
    //    this.age = a;
    //    this.country = c
    // }

    // short this above commented code
    constructor(
        public name: string,
        private age: number,
        readonly country: string
    ){}

    play(){
        console.log(`${this.name} is play from country is ${this.country}`)
    }
}
