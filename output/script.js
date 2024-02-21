console.log('connect with typescript');
const country = "I Love Bangladesh";
console.log(country);
let playerName = "Mashrafi";
console.log(playerName);
// playerName = 34;//this line face error coz typescript inference this variable will be string but i provide number.so show error
// console.log(playerName)
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 3));
//array
let fruits = ['apple', 'banana', 'orange'];
fruits.push('pineapple');
// fruits.push(20)
// fruits.push(true)
console.log(fruits);
//object
let person = {
    name: 'tamim',
    age: 35,
    isCaptain: true
};
// person.lastName = 'Iqbal'
console.log(person);
//Explict & Union types
let a; //explict
let b; //union
//array
let c = []; // explict array
let d = []; //union array
//object
let e; //explict object
let f;
//Dynamic type or Any Type
let x; //let x;
x = 5;
x = 'hello';
let y = []; //let y = []
y.push('Bangledesh');
y.push('1978');
//How to use function
const myFun = (a, b, c = ' ') => {
    console.log('hello');
    return a + c + b;
};
console.log(myFun("rasel", "chy", 'joyntu'));
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
sayHello({ name: 'rasel', age: 25 });
//function signature
let add;
add = (a, b) => {
    return a + b;
};
console.log('add value is -> ', add(5, 6));
let calculations;
calculations = (a, b, c) => {
    let arithmetic = c.toLowerCase();
    if (arithmetic === 'add') {
        return a + b;
    }
    else if (arithmetic === 'minus') {
        return a - b;
    }
    else if (arithmetic === 'multiply') {
        return a * b;
    }
    else if (arithmetic === 'division') {
        return a / b;
    }
    else {
        return 0;
    }
};
console.log(calculations(10, 20, 'Division'));
//classes | access modifiers
// class Person{
//     public name: string;
//     private age: number;
//     readonly country: string;
//     constructor(n: string, a: number, c: string){
//        this.name = n;
//        this.age = a;
//        this.country = c
//     }
//     play(){
//         console.log(`${this.name} is play from country is ${this.country}`)
//     }
// }
//mudule system
import { Person } from "./Classes/Player.js";
import { Vehicle } from "./Classes/vehicle.js";
const sakib = new Person('Sakib', 35, 'Bangladesh');
console.log('class -> ', sakib);
const tamim = new Person('tamim', 36, 'Bangladesh');
let personsList = [];
personsList.push(sakib);
personsList.push(tamim);
console.log(personsList);
const hanif = new Vehicle('Hanif', 42, 12);
console.log(hanif);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    console.log(`width is ${width} and length is ${length}`);
}
const threeDRectangle = {
    width: 10,
    length: 20,
    height: 5
};
// drawRectangle({
//     width: 20,
//     length: 30,
//     height: 10, // when pass extra property.show error.
// })
//but when pass by reference.its ok
drawRectangle(threeDRectangle);
