// // filter
// let arr=[10,20,30,40,50];

// let filterArr=arr.filter((item)=>item!=30);
// console.log(filterArr);
// filter will return new array

// Reduce
// let sum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue);

//   acc     curr
//    0       10   10
//    10      20   30
//    30      30   30
//    60      40   100
//    100     50   150


// let arr=[10,20,30,40,50];
// let sum=arr.reduce((accumulator,currentValue)=>{accumulator+currentValue}
// ,1000);
// // Above way of writing 1000 is the way of given acc an initital value of 1000
// console.log(sum);

//find
// let arr = [10,20,30,40,50];
// let foundItem =arr.find((item)=>item>20);

// console.log(foundItem);
// find always return only one element which will first satisfy its condition

// findIndex
// let foundItemIndex =arr.findIndex((item)=>item>20);

// console.log(foundItemIndex);
// it will return the index of first element which will first satisfy its condition

//Some
// let  hasEven =arr.some((item)=>item%2===0)
// console.log(hasEven);
// if anyone of the element satisfy given condition then it will return true 
//only and only if all elements do not satisfy given condition then it will return false 

//Every
// let evenArr=arr.every((item)=>{item%2===0})
// console.log(evenArr);
// only and only if all elemnts are satisfy the given condition then only it will return true 
// otherwise false


//Object Methods
let obj={
    firstName:"Hardik",
    lastName:"Batwal"
}

//keys
// let keys=Object.keys(obj);
// here Object is object constructor in js which 
// console.log(keys);

// //values
// let value=Object.values(obj);
// console.log(value);

// //enteries
// let entries=Object.entries(obj);
// console.log(entries);

// freeze
// Object.freeze(obj);//it will not allow to change the values as well as any kind of change including adding new key pairs in obj
// obj.firstName='Vinay';
// console.log(obj);

// const vs let
// const a=20;
// a=40;
// console.log(a);
// above will act same but it will return error 

const Object1={
    firstName:"Hardik",
    lastName:"Batwal"

}
// Object1.firstName="vinay";

// console.log(Object1);
// This will change the value even if it is const and will not give error because we are not changing it directly
// if we where do below step then it will give error because we are changing the value directly
//  object1="vinay"

//seal vs freeze 
// only diff is seal will allow to change value but not add any property to object 

//seal
Object.seal(obj);
obj.firstName="vinay";
// obj.address ="jaipur";
// console.log(obj);

// console.log(obj.hasOwnProperty("gender"));
// returns whether the given argument is key in given object or not gives true or false
// it is the only property that is implies on obj directly without calling object constructor

// String Methods
// Be aware of case sensitivity 

// charAt
let str="Hello World";

let char=str.charAt(5);
// console.log(char);
// it includes space as well

//Concatenation

let newstr=str.concat(" Techno");
// console.log(newstr);

let hasWorld =str.includes("World");
// console.log(hasWorld);
//true


//indexOf
// let index =str.indexOf("o");
//it will return the index of first "o" that will be encounter first
let index =str.indexOf("or");
// console.log(index);//7 
// it will return the index of "o" but where "or" is present

//LastIndex
let index1=str.lastIndexOf("o");
// console.log(index1);

//Slice
// let sliceStr=str.slice(3,8);
// console.log(sliceStr); //lo Wo
// space is included

// let SubStr=str.substring(4,8);
// console.log(SubStr);

// Diff btw slice vs SubStr
//substring do not take negative values and it will treate it as zero hence will print complete string
// let SubStr=str.substring(-5);
// console.log(SubStr);

// let sliceStr=str.slice(-5);
// console.log(sliceStr); 

// toUpperCase
// let newStr=str.toUpperCase();
// console.log(newStr);

// //toLowerCase
// let newStr2=str.toLowerCase();
// console.log(newStr2);

//trim
let str2="     hello    ,      world      ";
// console.log(str2.length);

let trimStr=str2.trim();
// console.log(trimStr.length);//left and right space will be trimmed

// split
//Interview Question 
// map filter reduce
//slice splice split

// slice = is used with string , Array
// splice= is used with Array
// split= is used with string 

let splitStr= str2.split();
// console.log(splitStr);
//[ '     hello    ,      world      ' ]

//replace
let replaceStr=str2.replace("world","techno");
// console.log(replaceStr);
// hello    ,      techno      

let repeatStr=str2.repeat(2);
// console.log(repeatStr);
// hello    ,      world           hello    ,      world  


// Math Object
// OTP generated application of math object

// let num = Math.random();
//generate random num btw 0 to 1
// console.log(num);

//floor vs ceil vs roundoff
let num1= 10.23;
console.log(Math.floor(num1));//10
console.log(Math.ceil(num1));//11
console.log(Math.round(num1));//10

//Power
console.log(Math.pow(2,3));//8

//square root
console.log(Math.sqrt(16));//4

//OTP generated
// let otp =Math.random()*9000 ;  //0- 8999.9999
//let otp =(1000+Math.random()*9000); //1000 - 9999.9999
let otp=Math.floor(1000+Math.random()*9000)// 1000 - 9999

