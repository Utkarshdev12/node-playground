import crypto from 'crypto';
console.log(crypto.randomBytes(16).toString('hex'));
console.log('Hello, world!');

function HELLO(p:string){
    console.log( 'Hello, ' + p);
}
HELLO("world");
const p:number=10;
console.log(p);


import Calculator from './calculator';
import * as readlineSync from 'readline-sync';
const calculator = new Calculator();


const num1: number = parseFloat(readlineSync.question('Enter the first number: '));
const num2: number = parseFloat(readlineSync.question('Enter the second number: '));
const operator: string = readlineSync.question('Enter the operator (+, -, *, /): ');
const result = calculator.calculate(num1, num2, operator);
console.log(`Result: ${result}`);
