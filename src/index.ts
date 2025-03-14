// import crypto from 'crypto';
// console.log(crypto.randomBytes(16).toString('hex'));
// console.log('Hello, world!');

// function HELLO(p:string){
//     console.log( 'Hello, ' + p);
// }
// HELLO("world");
// const p:number=10;
// console.log(p);
// import Calculator from './calculator';
// import * as readlineSync from 'readline-sync';
// const calculator = new Calculator();


// const num1: number = parseFloat(readlineSync.question('Enter the first number: '));
// const num2: number = parseFloat(readlineSync.question('Enter the second number: '));
// const operator: string = readlineSync.question('Enter the operator (+, -, *, /): ');
// const result = calculator.calculate(num1, num2, operator);
// console.log(`Result: ${result}`);


import ReminderDatabase from "./reminder";

const db = new ReminderDatabase();


db.createReminder("1", "Doctor Appointment", new Date("2025-03-15"), "Visit Dr. Smith at 10 AM");
db.createReminder("2", "Meeting", new Date("2025-03-20"), "Project discussion at 3 PM");

console.log(db.exists("1")); 
console.log(db.exists("3")); 


console.log(db.getAllReminders());

console.log(db.getReminder("1"));
console.log(db.getReminder("3")); 

db.updateReminder("1", "Dentist Appointment", new Date("2025-03-16"), "Changed to Dr. Lee at 11 AM");
console.log(db.getReminder("1"));

db.removeReminder("2");
console.log(db.getAllReminders());