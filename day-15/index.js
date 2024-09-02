<<<<<<< HEAD
//Classes

// class Person {
//     constructor(name,age) {
//         this.name =name;
//         this.age=age;
//     }

// greet(){
//     console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
    
// }
// }
// const person1 =new Person("Hardik",40);
// console.log(person1);
// js have only follow inheritance property from oops

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
        
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
        //super will go to the parent and define its property 
        //it will store the object of parent class
    }
    //function overriding,inheritence,polymorphism
    speak(){
     console.log(`${this.name} barks`);
     
    }
}
// polymorphism  beacuse speak functions works differently in this two different classes
//purely polymorphism , encapsulation nhi hota hai

class Cat extends Animal{
    constructor(name){
        super(name);
      
    }
    speak(){
     console.log(`${this.name} meows`);
     
    }
}

class BankAccount{
    #balance=0;
    // here # is used for private access modifier
    constructor(owner){
        this.owner=owner;
    }
    deposit(amount){
     this.balance += amount;
     console.log(`${this.owner} deposited ${amount} Current Balance :${this.balance}`);
     
    }
=======
//Classes

// class Person {
//     constructor(name,age) {
//         this.name =name;
//         this.age=age;
//     }

// greet(){
//     console.log(`Hello, my Name is ${this.name}and my age is ${this.age}`);
    
// }
// }
// const person1 =new Person("Hardik",40);
// console.log(person1);
// js have only follow inheritance property from oops

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
        
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
        //super will go to the parent and define its property 
        //it will store the object of parent class
    }
    //function overriding,inheritence,polymorphism
    speak(){
     console.log(`${this.name} barks`);
     
    }
}
// polymorphism  beacuse speak functions works differently in this two different classes
//purely polymorphism , encapsulation nhi hota hai

class Cat extends Animal{
    constructor(name){
        super(name);
      
    }
    speak(){
     console.log(`${this.name} meows`);
     
    }
}

class BankAccount{
    #balance=0;
    // here # is used for private access modifier
    constructor(owner){
        this.owner=owner;
    }
    deposit(amount){
     this.balance += amount;
     console.log(`${this.owner} deposited ${amount} Current Balance :${this.balance}`);
     
    }
>>>>>>> 373bd5d7e09893eb6982537b75fa1c8252237ca5
}