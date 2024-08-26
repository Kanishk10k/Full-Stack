console.log("hello world!");

// alert("hello bhaiyo");
// alert is functionality of browser hence it is giving error because node do not have alert functionality

// var ,let,const

// IQ What is the difference btw var and let ??
// soln:- The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:
// Variables declared by let are only available inside the block where they’re defined.
// Variables declared by var are available throughout the function in which they’re declared.

var firstNum =20;

console.log(firstNum);

//types of data type in js
//primitive types-string ,number,boolean,undefined,sybmol,bigint
//reference or object typed data types --array,objects,date,null

// var firstVar="I'm a full stack developer"
// console.log(firstVar);
// console.log(typeof(firstVar));


// var firstVar=20;
// console.log(firstVar);
// console.log(typeof(firstVar));


// var firstVar=21.09;
// console.log(firstVar);
// console.log(typeof(firstVar));

// var firstVar=-21.09;
// console.log(firstVar);
// console.log(typeof(firstVar));

// var firstVar=true;
// console.log(firstVar);
// console.log(typeof(firstVar));

var firstVar=undefined;//Here, undefine is type and value as well
// console.log(firstVar);
// console.log(typeof(firstVar));

var firstVar=[20,30.90,"hello" ,true,undefined];
// console.log(firstVar);
// console.log(typeof(firstVar));
// array in js: collection of multiple data types in contigious memory location
// in js multi deminsional array doesnt exit but you can pass array inside array can be consider as multideminsional array

var firstVar=null;
// console.log(firstVar);
// console.log(typeof(firstVar));//object

var firstVar={
    firstName:"hardik",
    lastName:"batwal"
};
// console.log(firstVar);
// console.log(typeof(firstVar));


var date=new Date();
// console.log(date);
// console.log(typeof(date)
// );
// type of NaN is number Important
// we can make multiple objects inside object
// {{},{},{},{}}

//[{},{},{}] -json  mostly used
//array of objects 

//[[],[],[]]
//array of array

// proving four property of js defination taught in last class

// var firstName="Hello Techno";
// firstVar=[20,30];
// firstVar={
//     firstName:"Hardik",
//     lastName:"Batwal"
// };
// firstVar= true;
// console.log(firstVar);

//problems of var and var vs let vs const

var first =30;

// why it is allowing to write var again for same variable to change the value
var first=40;
//variable defined with var can be redecleared or can be reassigned
//this problem is solved with let

let second=30;
// let second=40; //giving error
//variable defined with let cannot  be redecleared but can be reassigned

const third=90;
// third=80;

//variable defined with let cannot  be redecleared  and cannot be reassigned
//there are two more difference will study futher

//operators

//arithmatic operators

//+,-,*,/
// let a=10;
// let b=20;
//  let add= a+b;
//  console.log(add);
 
//  let sub=a-b;
//  console.log(sub);
 
//  let multiple=a*b;
//  console.log(multiple);
 
//  let divide=a/b;
//  console.log(divide);
 
//  let firstName="Hardik";
//  let lastName="batwal";

//  console.log(firstName+" "+lastName);

//  console.log(a**b);
//  console.log(a%b);
// console.log(5+5);
// console.log(5+"5");
// // only add operation remaining 5 will be converted into string otherwise in other operators mathematical operations will be happening
// console.log(5-"5");
// console.log(5*"5");
// console.log(5/"5");

//Addition Assignment
let x=5;
// x=x+10;
// // or we can write
// x+=10;
// console.log(x); 
// console.log("shubham"+"jain"); //shubhamjain
// console.log("shubham"+10); //shubham10
// console.log("shubham"-10); //NaN

// let str="10";
// console.log(+str);
// console.log(typeof (str));
//  //here string is converted into number but it is not updated str varibale
// let conStr=+str;
// console.log(typeof (conStr));
// // here the value is updated in varible side 

// let str="shubham";
// let ConStr=+str;
// console.log(typeof(str));
// console.log(ConStr); //NaN
// console.log(typeof(ConStr));



let str1="5";
let str2=+str1;
// //here str2 is converted into number from string
// console.log(5+"5");//55
// console.log(str2);
// console.log(typeof(str2));

// let y=10;
// y=y-3;
//or 
// y-=3;
// y*=3;
// y/=3;
// y**=3;
// y%=3;
// console.log(y);

//Comparision operator

let num1=10;
let num2="10";

console.log(num1==num2);
console.log(num1===num2);
// === it compares the data type as well

//Logical operators

//AND (&&) OR(||)
// // if number is positive or negative and other than 0 is considered true
// let isLoggedIn=true;
// let isAdmin=true;
// console.log("Is the user logged in and an admin?", isLoggedIn && isAdmin);


let isLoggedIn=10;
let isAdmin=20;
console.log("Is the user logged in and an admin?", isLoggedIn && isAdmin);

//output is 20 because and operator return the last value whereas or operation returns the first value
console.log(10&&20);//20
console.log(10||20);//10

console.log(true||false);//true
//shortcircuit evaluation concept is applied
//i.e if or operator finds first value as true it will not check the next value
//whereas and operator checks till last value hence returns the last value
console.log(Boolean(-10)); 



 









 
 
 