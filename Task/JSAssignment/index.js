// Q1. Basic Function:
//      Write a function named sayHello that takes no parameters and returns the string "Hello, World!".

function sayHello(){
  console.log("Hello, World!");    
}
sayHello();

// Q2. Function with Parameters:
//      Create a function doubleNumber that takes a number as an argument and returns the number multiplied by 2.

function doubleNumber(a){
  return a*2;
}

let a=+prompt("Enter the Number for double");
console.log(doubleNumber(a));

// Q3. Simple Return Function:
//      Write a function addTwoNumbers that accepts two numbers as arguments and returns their sum.

function addTwoNumbers(a,b){
  return a+b;
}

let c=+prompt("Enter 1st no.:");
let d=+prompt("Enter 2nd no.:");
console.log(addTwoNumbers(c,d));

// Q4. Arrow Function:
//      Convert the doubleNumber function from question 2 into an arrow function.

doubleNumber=(a)=>a*2;
a=+prompt("Enter the Number for double using arrow");
console.log(doubleNumber(a));

// Q5.  Arithmetic Operator:
//      Create a function subtractTen that takes a number as an argument and returns the result of subtracting 10 from it

let subtractTen=(a)=>(a-10);
a=+prompt("Enter the Number for sub 10");
console.log(subtractTen(a));

// Q6. Comparison Operator:
//     Write a function isGreaterThanFive that takes a number as an argument and returns true if the number is greater than 5, otherwise false.

function isGreaterThanFive(a){
  if(a>5)
      return true;
  return false;
}
a=+prompt("Enter the Number greater than 5");
console.log(isGreaterThanFive(a));

// Q7. Logical Operator:
//     Write a function isBetweenOneAndTen that takes a number as an argument and returns true if the number is between 1 and 10 (inclusive), otherwise false.

function isBetweenOneAndTen(a){
  if(a>=1 && a<=10)
      return true;
  return false;
}
a=+prompt("Enter the Number bw 1 & 10");
console.log(isBetweenOneAndTen(a));

// Q8.  If-Else Statement:
//     Write a function isEven that takes a number as an argument and returns "Even" if the number is even, and "Odd" if the number is odd

function isEven(a){
  if(a%2===0)
      return "Even";
  return "Odd"
}
a=+prompt("Enter the Number for even or odd");
console.log(isEven(a));

// Q9. Ternary Operator:
//      Write a function checkAge that takes an age as an argument and returns "Adult" if the age is 18 or above, and "Minor" if the age is below 18. Implement this using the ternary operator.

function checkAge(age){
  (age>=18)? console.log("Adult") : console.log("Minor");
}
a=+prompt("Enter the age");
checkAge(a)

// Q10. Switch Statement:
//         Create a function getDayType that takes a number (1-7) as an argument and returns:
//         - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
//         - "Weekday" if the number is between 1 and 5.
//         Use a switch statement to implement this logic

function getDayType(a){
  switch (a){
      case 1: return "Weekday";
      case 2: return "Weekday";
      case 3: return "Weekday";
      case 4: return "Weekday";
      case 5: return "Weekday";
      case 6: return "Weekend";
      case 7: return "Weekend";
      default: return "Invalid day no.";
  };
}
a=+prompt("Enter the day number");
console.log(getDayType(a));