<<<<<<< HEAD
// console.log(a); 
// console.log(sum());

//Hoisting: variable or function is accessed before declaring

//Event Loop , Timers Function, call back hell , promise,
//Async Await, constructor,classes
// var a=20; //undefined 
// let a=20; let will give error as a is not intialised
// let b=1000;

// function sum() {
//     let x=200;
//     let y=300;
//     function add(){
//        return x+y;
//     }
//     return add();
// }

// let c=100;

// console.log(a,b,c);
// sum()
// function call nhi hoga toh execution context nhi banega
//voh uhe padha rahega variable execution context me 

// IQ me aisa puch te hai 
// var supports hoisting but let and const hoisting support nhi kerta hai 
//actually aisa nhi hota hai entery level pe sab yehi samhj te hai 
//let and const bhi support hoisting kerta hai 
//E6 version me jab let and const aaye toh yeh variable environment ke andhar 
// ek or box banaya jesko bol te hai temporal dead zone 
// jab tak enko value asign nhi hoge tab tak yeh access nhi ker sakte hai

// var sum=function() {
//         let x=200;
//         let y=300;
//         function add(){
//            return x+y;
//         }
//         return add();
//     }
    //kisame konsa error aa rha hai important hai 

//  Timer function()

//  let timeout= setTimeout(()=>{
//     console.log("hello Techno");
        
// },5000); //1 sec =10000
// //after  5 sec it will print hello techno


// let interval =setInterval(()=>{
//     console.log(Math.random());
        
//  },2000);//after every 2 sec it will print  

//     document.getElementById("button").addEventListener("click",function(){
//        console.log("Stop Interval buton clicked");
//        clearInterval(interval);
       
//     })
//     document.getElementById("timeout").addEventListener("click",function () {
//         console.log("Stop Timeout button clicked");
//         clearTimeout(timeout);
        
//     })

//Async js

// let a=20;
// let b=30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("Hello Techno");
    
// },2000);

// console.log(a);
// console.log(b);

//Timeout do not enter directly to the call stack since it will take time to execute
// hence it is store in worker thread then at right time it is send to the call stack
// through Task queue 
//whole process is caleed event loop

//Promises

//call backs can be used for tackling async function

// function step1(callback){
//    setTimeout(()=>{
//     console.log("Step1 completed");
//     callback();
//    },1000)
//     }
//     function step2(callback){
//         setTimeout(()=>{
//          console.log("Step1 completed");
//          callback();
//         },1000)
//          }
//          function step3(callback){
//             setTimeout(()=>{
//              console.log("Step1 completed");
//              callback();
//             },1000)}

// //call back hell :-not prefered    Soln:-Promises
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All Steps completed");
            
//         })
//     })
// })

//Promises : it is nothing but just a object which contain multiple value is contained
//Promise i s the constructor function

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data ={
//                 firstName:"Hardik",
//                 LastName:"BAtwal"
//             };
//             return resolve(data);
//         },2000)
 
//     }
// )
// }



// function fetchData(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//            try{
           
//                             let data ={
//                                 firstName:"Hardik",
//                                 LastName:"BAtwal"
//                             };
//                             return resolve(data);
//                         }
//             catch(error){
//             reject(error);
//             }
//             },2000)
     
//         }
//     )
//     }
// let fetchedData=fetchData();
// console.log(fetchedData);

// //Promise States -- Pending ,fulfilled , rejected
// //Pending --> fulfilled
// //Pending --> reject

// //then and catch are the functions can be used to retrive data from promise
// fetchedData
// .then((data)=>{
// console.log(data);

// }
// )//pending to success then if you want to go to another website we use then
// .catch((error)=>{
// console.log(error);

// });// 404 error showcase we use catch

//https://fakestoreapi.com/products

// function fetchData(){
//     let data=fetch("https://fakestoreapi.com/products");
    // console.log("Next step after Fetching");
    
    // return data;
//bacground me promise work ker rha hai
// }
// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    console.log(res.json());
//    //if we dont use json then we will get one promise and one response if we use we get two promise
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    return res.json();
   
// })
// .then((data)=>{
//   console.log(data);
  
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// document.getElementById("product-button").addEventListener("click",function(){
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach((item) => {
//             console.log(item.image);
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
//             let myDiv = document.getElementById("products");
//             myDiv.appendChild(newDiv);
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// });

//Async Await

// async function fetchData(){
//     let response= await fetch("https://fakestoreapi.com/products")
//     console.log(response);
    
// }

//Async Await

// async function fetchUserData(){
//     try{
//         let response=  await fetchData();
//         console.log(response);
//     }
   
    
//     catch(error){
//     console.log(error);
    
//     }
// }
// fetchUserData();

//This 

// let user={
//     username:"hardik",
//     age :"40",
//     getUserDetails:function(){
//         console.log(this); //it will print user object
        
        // console.log(`Hello,My username is ${this.username} and my age is ${this.age}`);

        
//     }
// }
// console.log(this); //it will print the empty object

// user.getUserDetails();

// Constructors --functions he hote hai 
//technically class do not exit in js because behind the scene constructor use hota hai
//class ka synatx hota hai but it is the syntatic sugar

// In js function ka pehla letter capital ho toh voh constructor hai 
//when you create constructor make sure to keep first letter capital

//creating constructor
// function Person(name,age){
//     const personObj={
//         username:name,
//         age:age,
//         greet :function(){
//             console.log(`Hello, my Name is ${this.username}and my age is ${this.age}`);
            
//         }
//     }
//     return personObj;
// }

// const person1=Person("hardik","20");
// const person2=Person("vinay","50");
// person1.greet();
// person2.greet();

//above method is not right way of creating constructor although it will work

function Person(name,age){
    this.name =name;
    this.age=age;
    // this.greet =function(){
    //     console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
        
    // }
    // return this ; // nhi return karunge toh bhi yeh return ker dega
}
//Behind th scene
Person.prototype.greet= function(){
        console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
        
    }
    // pehle greet function Person me dekha rha tha per abh voh prototype me dekh rha hai 
    //in console
    //agar me 50 bar object banaunga toh 50 bar function memory kha yega 
    //but usko me prototyppe me dal do toh ek bar he memory khayega
const person1=new Person("Hardik","21");
const person2=new Person("Batwal","22");
console.log(person1);
console.log(person2);

// let arr=[10,20,30,40]
// console.log(arr);

=======
// console.log(a); 
// console.log(sum());

//Hoisting: variable or function is accessed before declaring

//Event Loop , Timers Function, call back hell , promise,
//Async Await, constructor,classes
// var a=20; //undefined 
// let a=20; let will give error as a is not intialised
// let b=1000;

// function sum() {
//     let x=200;
//     let y=300;
//     function add(){
//        return x+y;
//     }
//     return add();
// }

// let c=100;

// console.log(a,b,c);
// sum()
// function call nhi hoga toh execution context nhi banega
//voh uhe padha rahega variable execution context me 

// IQ me aisa puch te hai 
// var supports hoisting but let and const hoisting support nhi kerta hai 
//actually aisa nhi hota hai entery level pe sab yehi samhj te hai 
//let and const bhi support hoisting kerta hai 
//E6 version me jab let and const aaye toh yeh variable environment ke andhar 
// ek or box banaya jesko bol te hai temporal dead zone 
// jab tak enko value asign nhi hoge tab tak yeh access nhi ker sakte hai

// var sum=function() {
//         let x=200;
//         let y=300;
//         function add(){
//            return x+y;
//         }
//         return add();
//     }
    //kisame konsa error aa rha hai important hai 

//  Timer function()

//  let timeout= setTimeout(()=>{
//     console.log("hello Techno");
        
// },5000); //1 sec =10000
// //after  5 sec it will print hello techno


// let interval =setInterval(()=>{
//     console.log(Math.random());
        
//  },2000);//after every 2 sec it will print  

//     document.getElementById("button").addEventListener("click",function(){
//        console.log("Stop Interval buton clicked");
//        clearInterval(interval);
       
//     })
//     document.getElementById("timeout").addEventListener("click",function () {
//         console.log("Stop Timeout button clicked");
//         clearTimeout(timeout);
        
//     })

//Async js

// let a=20;
// let b=30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("Hello Techno");
    
// },2000);

// console.log(a);
// console.log(b);

//Timeout do not enter directly to the call stack since it will take time to execute
// hence it is store in worker thread then at right time it is send to the call stack
// through Task queue 
//whole process is caleed event loop

//Promises

//call backs can be used for tackling async function

// function step1(callback){
//    setTimeout(()=>{
//     console.log("Step1 completed");
//     callback();
//    },1000)
//     }
//     function step2(callback){
//         setTimeout(()=>{
//          console.log("Step1 completed");
//          callback();
//         },1000)
//          }
//          function step3(callback){
//             setTimeout(()=>{
//              console.log("Step1 completed");
//              callback();
//             },1000)}

// //call back hell :-not prefered    Soln:-Promises
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All Steps completed");
            
//         })
//     })
// })

//Promises : it is nothing but just a object which contain multiple value is contained
//Promise i s the constructor function

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data ={
//                 firstName:"Hardik",
//                 LastName:"BAtwal"
//             };
//             return resolve(data);
//         },2000)
 
//     }
// )
// }



// function fetchData(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//            try{
           
//                             let data ={
//                                 firstName:"Hardik",
//                                 LastName:"BAtwal"
//                             };
//                             return resolve(data);
//                         }
//             catch(error){
//             reject(error);
//             }
//             },2000)
     
//         }
//     )
//     }
// let fetchedData=fetchData();
// console.log(fetchedData);

// //Promise States -- Pending ,fulfilled , rejected
// //Pending --> fulfilled
// //Pending --> reject

// //then and catch are the functions can be used to retrive data from promise
// fetchedData
// .then((data)=>{
// console.log(data);

// }
// )//pending to success then if you want to go to another website we use then
// .catch((error)=>{
// console.log(error);

// });// 404 error showcase we use catch

//https://fakestoreapi.com/products

// function fetchData(){
//     let data=fetch("https://fakestoreapi.com/products");
    // console.log("Next step after Fetching");
    
    // return data;
//bacground me promise work ker rha hai
// }
// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    console.log(res.json());
//    //if we dont use json then we will get one promise and one response if we use we get two promise
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    return res.json();
   
// })
// .then((data)=>{
//   console.log(data);
  
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// document.getElementById("product-button").addEventListener("click",function(){
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach((item) => {
//             console.log(item.image);
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
//             let myDiv = document.getElementById("products");
//             myDiv.appendChild(newDiv);
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// });

//Async Await

// async function fetchData(){
//     let response= await fetch("https://fakestoreapi.com/products")
//     console.log(response);
    
// }

//Async Await

// async function fetchUserData(){
//     try{
//         let response=  await fetchData();
//         console.log(response);
//     }
   
    
//     catch(error){
//     console.log(error);
    
//     }
// }
// fetchUserData();

//This 

// let user={
//     username:"hardik",
//     age :"40",
//     getUserDetails:function(){
//         console.log(this); //it will print user object
        
        // console.log(`Hello,My username is ${this.username} and my age is ${this.age}`);

        
//     }
// }
// console.log(this); //it will print the empty object

// user.getUserDetails();

// Constructors --functions he hote hai 
//technically class do not exit in js because behind the scene constructor use hota hai
//class ka synatx hota hai but it is the syntatic sugar

// In js function ka pehla letter capital ho toh voh constructor hai 
//when you create constructor make sure to keep first letter capital

//creating constructor
// function Person(name,age){
//     const personObj={
//         username:name,
//         age:age,
//         greet :function(){
//             console.log(`Hello, my Name is ${this.username}and my age is ${this.age}`);
            
//         }
//     }
//     return personObj;
// }

// const person1=Person("hardik","20");
// const person2=Person("vinay","50");
// person1.greet();
// person2.greet();

//above method is not right way of creating constructor although it will work

function Person(name,age){
    this.name =name;
    this.age=age;
    // this.greet =function(){
    //     console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
        
    // }
    // return this ; // nhi return karunge toh bhi yeh return ker dega
}
//Behind th scene
Person.prototype.greet= function(){
        console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
        
    }
    // pehle greet function Person me dekha rha tha per abh voh prototype me dekh rha hai 
    //in console
    //agar me 50 bar object banaunga toh 50 bar function memory kha yega 
    //but usko me prototyppe me dal do toh ek bar he memory khayega
const person1=new Person("Hardik","21");
const person2=new Person("Batwal","22");
console.log(person1);
console.log(person2);

// let arr=[10,20,30,40]
// console.log(arr);

>>>>>>> 373bd5d7e09893eb6982537b75fa1c8252237ca5
