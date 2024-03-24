#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { 
    message: "Please Enter First Number",
   type: "number",
   name: "firstNumber" 
 },

  {
    message: "Please Enter Second Number",
    type: "number",
    name: "secondNumber",
  },

  {
    message: "Select the operator to perform operatoin",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + " + " + answer.secondNumber + " = " + answer.firstNumber + answer.secondNumber);
    
}

else if (answer.operator === "Subtraction") {
    console.log(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`);
    
}

else if (answer.operator === "Multiplication") {
    console.log(`${answer.firstNumber} x ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`);
    
}

else if (answer.operator === "Division") {
    console.log(`${answer.firstNumber} ÷ ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`);
    
}