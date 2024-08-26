// Question 1: String Concatenation
// Task: Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.

// let firstname=prompt("enter your firstname");
// let LastNAme=prompt("enter your lastname");
// console.log(firstname+LastNAme);

// Question 2: If-Else Statements
// Task: Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.
// let x=10;
// if(x>0){
//     console.log("positive");
    
// }
// else if (x===0) {
//     console.log("zero");
    
// } 
// else{
//     console.log("negative");
    
// }
// Question 3: Loops
// Task: Write a JavaScript program that uses a `for` loop to print the numbers from 1 to 10.
// for (let i = 1; i <=10; i++) {
//   console.log(i);
  
// }

// Question 4: Functions
// Task: Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the
// console. Then, call the function with a sample name.

// function greet(){
//     let name=prompt("enter your name");
//     console.log(`Hello ${name}`);
    
// }
// greet();

// Question 5: Arrays
// Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.
let sum=0;
let arr=[10,20,30,40,50];
for (let i = 0;i < arr.length; i++) {
   sum=sum+arr[i]
    
}
console.log(sum);
