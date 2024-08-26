"use strict"
// strict mode can be define globally as well as at function level

//Loops ,strict mode,console type,array methods

//for , while ,do while

// let count=1;

// while (count<= 10) {
//     console.log(count);
//     count++;
    
// }


// DO WHILE LOOP
// let count=1;

// do{
//     console.log(count);
//     count++;
    
// }while (count<=5);

// FOR LOOP
// for (let i = 0; i <=10; i++) {
//     console.log(i);
    
    
// }

//for loop with array 
// let arr=[10,20,30,40,50,60,70,80,90];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     }


//for of and for in loop
// let items=["first","second",3,4,"Fifth"];

// for (let ele of items) {
//     console.log(ele);
    
// }//this will return the values

// for(let ele in items){
//     console.log(ele);//this will return indexes of array
//     console.log(items[ele]);//this will return the value
    
//     }

// js has lot of bugs in order to avoid it developers used strict mode

//without strict mode 

// let a=20;
// b=30;
// console.log(b); //30

// function sum(a,a) {
//     console.log("Sum Function");
    
// }
// sum();// Sum Function


//with strict mode 
// let a=20;
// b=30;
// // console.log(b); //error
// function sum(a,a) {
//     //"use strict"
//     console.log("Sum Function");
    
// }
// sum();//error due to duplicate parameters

//Types of console 
//inspect the html page and observe the result in console
// console.log("log statement");
// console.error("This is an error console");
// console.warn("this is a warning console");
// // console.assert(condition,"statement");
// console.assert(5>10,"5 is not greator than 10");
// console.assert(10>5,"10 is greator than 5"); //this will not be seen in the console because assert on show false condition



// let person={
//     name:"shubham",
//     age:"**",
//     address:{
//         city:"jaipur",
//         zipCode:"302018"
//     },
//     hobbies:["Riding","Travelling"]
// }

// console.dir(person);//it will make show result in form of directory

// let data=
// [{
//     name:"Shubham", address: "jaipur", dept:"FSD"
// },
// {   name:"vinay" ,address: "Udaipur",dept:"DS"},
// {
//     name:"harshit",address:"Kota",dept:"Python"
// }
// ]
// console.table(data);
//it will print the data in tabular form

// console.group("Group");
// console.log("message1");
// console.log("message2");
// console.groupEnd(); 
//it will grouo the messages 

// console.count("Counter");
// console.count("Counter");
// console.count("Counter");
//this will count the no of times it run

// Array methods 
//IQ what it returns and does it change the original array in every array method

//Push, pop, shift, unshift

// let arr= [10,20,30,40,50,60];
// let result=arr.push(1000);
// console.log(result); //push return the length of array
// console.log(arr);
// //push will return the array with updated value
// console.log(arr.pop()); //remove the last element
// console.log(arr); 
// // pop return the deleted value and changes the original array
// console.log(arr.unshift(500));//unshift will add 500 at the starting index of array and it will return the length of array
// console.log(arr); //
// console.log(arr.shift());//shift will remove the element from starting index and return the removed value
// console.log(arr);
// push,unshift ---> returns the length of array
//pop ,shift ---> returns the removed element from array
//all four of them changes the original array

//concatenation
// let arr1=[10,20];
// let arr2=[30,40];
// let result=arr2.concat(arr1);
// console.log(arr1);
// console.log(arr2);
// console.log(result);
// concatination will not change the original array and returns the updated array

// Slice, splice

// let arr=[10,20,30,40,50,60];
//arr.slice("starting index","ending index")
// let sliceArr=arr.slice(2,5); // 5 is excluded
// console.log(arr);
// console.log(sliceArr);
//slice will return a new array and original array remain same 

//if you want to remove elements from between the array then we will use splice
// let arr=[10,20,30,40,50,60];
//remove 
// arr,splice(2,"no fo Elements to be deleted")
// console.log(arr.splice(2)); //removed 2 elemnts from starting i.e 10,20
// console.log(arr);
//returns the array which do not included deleted element
//it changes the original array

// //add
// console.log(arr.splice(2,2,"Hardik","achariya"));//30, 40 is removed
// console.log(arr);//updated array 

//Include
// let arr=[10,20,30,40,50,60];
// console.log(arr.includes(100));
// console.log(arr.includes(10));
// console.log(arr);
//do not change the original array and returns true or false wheater that element is available or not in the given array 



// //REVERSE
// let arr=[10,20,30,40,50,60];
// arr.reverse();
// console.log(arr);//it changes the original array and returns the reverse of original array
// // [ 60, 50, 40, 30, 20, 10]


//JOIN
// let arr=[10,20,30,40,50,60];
// let result=arr.join("");
// console.log(typeof(result));//string
// console.log(result);//102030405060
// console.log(arr); 
//join do not change the original array returns the array by adding special symbol given by user btw the elemnets of array


// let result=arr.join("+");
// console.log(typeof(result));//string
// console.log(result);//10+20+30+40+50+60
// let arr1=[10,20,[30,[40]]];
// let result=arr1.flat(2);
// console.log(result);
// console.log(arr1);
//used for flating the nested array  it do not change the original array returns the flatten array


//map, filter , reduce

// map is used to transform the array

// let arr=[10,20,30,40,50,60];
// let newArr=arr.map((item)=>{
//     if (item>30) {
//         return item;
//     }
//     // return item*10;
//     // if i comment the above line then it will give output in this way [ undefined, undefined, undefined, 40, 50, 60 ]
//     //it will return somethings or if nothing than it will return undefined
// }
//above function is called callback function
// )
// console.log(newArr);
// console.log(arr);
//returns a transformed array and do not change the original array
//map will iterates equal to the number of elemnts in array
//map returns the new array with the same length as original array

//forEach
//IQ diference btw the forEach and Map
let arr=[10,20,30,40,50,60];
let result=arr.forEach((item,i)=>{
    console.log(i);
    
    
    // return item;

});
// for each will work same as map but it will not return anything in case you return something it will return undefined
console.log(result);//undefined
console.log(arr);//it will not change the original array











  



