console.log('connect with typescript')

const country = "I Love Bangladesh";

console.log(country)

let playerName = "Mashrafi";
console.log(playerName)

// playerName = 34;//this line face error coz typescript inference this variable will be string but i provide number.so show error
// console.log(playerName)

function multiply(a : number, b : number){
    return a * b;
}

console.log(multiply(4,3))


//array
let fruits = ['apple', 'banana', 'orange'];
fruits.push('pineapple');
// fruits.push(20)
// fruits.push(true)

console.log(fruits)

//object

let person = {
    name: 'tamim',
    age: 35,
    isCaptain: true
}

// person.lastName = 'Iqbal'
console.log(person)

//Explict & Union types
let a: number //explict
let b : string | number //union

//array
let c : string[] = [] // explict array
let d : (number | string)[] = [] //union array

//object
let e : object //explict object
let f : {
    name : string,
    age : number,
    gender: boolean
}

//Dynamic type or Any Type
let x: any; //let x;

x=5;
x='hello';

let y: any[] = [] //let y = []

y.push('Bangledesh');
y.push('1978')


//How to use function
const myFun = (a: string, b: string, c: string = ' ') => {
    console.log('hello')
    return a + c + b
}

console.log(myFun("rasel","chy", 'joyntu'))

//Type Aliases
type StringOrNumber = string | number;
type userType = {name: string, age: number}

const userDetails = (
    id: StringOrNumber,
    user: userType
) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`)
}

const sayHello = (user: userType) =>{
    console.log(`hello ${user.age>50 ? 'Sir' : 'Mr.'} ${user.name}`)
}

sayHello({name: 'rasel', age: 25})


//function signature
let add: (x: number, y: number) => number

add = (a: number, b: number) =>{
    return a+b
}

console.log('add value is -> ',add(5,6))

let calculations: (x:number, y:number,z:string) => number

calculations = (a: number, b: number, c: string) => {
    let arithmetic = c.toLowerCase()
    if (arithmetic === 'add'){
        return a+b
    }
    else if(arithmetic === 'minus'){
        return a-b
    }
    else if(arithmetic === 'multiply'){
        return a*b
    }
    else if(arithmetic === 'division'){
        return a/b
    }
    else{
        return 0;
    }
}

console.log(calculations(10, 20, 'Division'))


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

const sakib = new Person('Sakib',35, 'Bangladesh')
console.log('class -> ', sakib)
const tamim = new Person('tamim', 36, 'Bangladesh')

let personsList: Person[] = [];

personsList.push(sakib)
personsList.push(tamim)

console.log(personsList)

const hanif = new Vehicle('Hanif',42,12);
console.log(hanif)

//Working with interface
interface RectangleOptions {
    width: number,
    length: number
}
function drawRectangle(options: RectangleOptions){
    let width = options.width;
    let length = options.length;

    console.log(`width is ${width} and length is ${length}`)
}

const threeDRectangle = {
    width: 10,
    length: 20,
    height: 5
}

// drawRectangle({
//     width: 20,
//     length: 30,
//     height: 10, // when pass extra property.show error.
// })

//but when pass by reference.its ok
drawRectangle(threeDRectangle)