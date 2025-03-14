/*let a:number=10;
let b:number=20;
let opeartor:string="+";
let result:number;
switch(opeartor){
    case "+":   result=a+b;
                break;
    case "-":   result=a-b;
                break;
    case "*":   result=a*b;
                break;
    case "/":   result=a/b;
                break;
    default:    result=0;
    
}
console.log(result);
*/
import * as readlineSync from 'readline-sync';


class Calculator {
   
    add(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    divide(num1: number, num2: number): number | string {
        if (num2 === 0) {
            return 'Error: Division by zero is not allowed.';
        }
        return num1 / num2;
    }

    calculate(num1: number, num2: number, operator: string): number | string {
        switch (operator) {
            case '+':
                return this.add(num1, num2);
            case '-':
                return this.subtract(num1, num2);
            case '*':
                return this.multiply(num1, num2);
            case '/':
                return this.divide(num1, num2);
            default:
                return 'Error: Invalid operator. Please use +, -, *, or /.';
        }
    }
}


export default Calculator;