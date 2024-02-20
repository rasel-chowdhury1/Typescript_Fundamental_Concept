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
const myFun = () => {
    console.log('hello')
}

let myFunc: Function;