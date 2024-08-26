//Date , rest , spread, Dom

let date =new Date();
// js functions are constructor
console.log(typeof(date));//object

console.log(date.getDate());

console.log(date.getDay());//1-Monday ,7-Sunday

console.log(date.getMonth());//0-11

console.log(date.getFullYear());//2024

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.toDateString());

console.log(date.toTimeString());

console.log(date.getTime());
// you can use this for creating OTP

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

//Destructuring

let arr =[10,20,30,40,50,60,70,80]

//let num =arr[2]

// let [num1] =arr;
// console.log(num1);

// let [num1,num2]=arr;
// console.log(num1,num2);

// let [num1,,num2]=arr;
// console.log(num1,num2);

// Rest operator
// let [num1, ...newArr]=arr;//rest operator : it cannot be used in the first and only at last
// console.log(num1,newArr);

let arr2=[10];
let [num1,num2=100]=arr2;
//if we do not give num2 a value here there is only one element in the array then on printing we will get undefine in num2

//Object destructuring

let obj ={
    firstName:"Hardik",
    lastName:"Batwal",
    address:"Udaipur",
    Gender:"Male"
}
let {firstName,address}=obj;
//now firstName will act as variable 

console.log(firstName);

// if we want to create a new obj which contain value of first object as key in second object
let obj1={};
obj1[firstName]="xyz";
obj1[address]="abc";
console.log(obj1);

// incase if there is variable name count and there is keyname as count as well in that case you can rename it 
let count=10;
let obj3={
   count:90,
   score :89
}
let {count:a,score}=obj3;
// renamed the count keyName
console.log(a);


//array are reference type datatype: they consider address 
let arr01 =[10,20,30];
let arr02=arr01;
arr02.push(1000);
console.log(arr02===arr01);//true

//here num01 and num02 is the primitive datatype: they consider the value
let num01=10;
let num02=num01;
num02+=20;
console.log(num01===num02);//false

let arr03=[10,20,30,40,50,60];
let arr04=[10,20,30,40,50,60];
arr04.push(90);
console.log(arr03===arr04);//false


//SPREAD operator

let arr05=[10,20,30];
let arr06=[...arr05];//spread operator not a rest operator
arr06.push(1000);
console.log(arr05);
console.log(arr06);

let arr07=[10,20,30];
let arr08=[40,50,60];
// let newarr=[arr07,arr08];
// this will make nested array

let arr09=[...arr07,100,...arr08,,20,100];
console.log(arr09);

let obj7={
    firstName:"Hardik",
    lastName:"Batwal"
}
let obj8={
    firstName:"Vinay",
     address:"Udaipur",
    Gender:"Male"

}
//value of firstname will be replace by later occuring obj  
let obj9={...obj7,...obj8,section:"FSD"};
console.log(obj9);

//Dom
// Document Object Model





