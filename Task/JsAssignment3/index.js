// Q1. Write a JavaScript program that uses the push() method to add an element to an array.
let arr=[10,20,30,40]
arr.push(70)
console.log(arr);

// Q2. Create a JavaScript program that removes the last element from an array using the pop() method.
arr.pop()
console.log(arr);

// Q3. Use the shift() method to remove the first element from an array.
arr.shift()
console.log(arr);

// Q4. Write a program that adds an element to the beginning of an array using the unshift() method.
arr.unshift(90)
console.log(arr);

// Q5. Modify an array by removing and/or adding elements using the splice() method.
console.log(arr.splice(2));
arr.splice(1,0,120)
console.log(arr);

// Q6. Use the slice() method to create a new array from a portion of an existing array.
arr=[10,20,30,40,50];
let arr1=arr.slice(0,2)
console.log(arr1);

// Q7. Find the index of an element in an array using the indexOf() method.
console.log(arr.indexOf(30));

// Q8. Create a new array by transforming each element in an existing array using the map() method.
arr=[10,20,30,40,50,60];
let newArr=arr.map((item)=>{
    if (item>30) {
        return item;
    }
})
console.log(newArr);

// Q9. Filter elements from an array that meet a certain condition using the filter() method.
arr=[10,20,30,40,50,60];
newArr=arr.filter((item)=>{
    if (item>40) {
        return item;
    }
})
console.log(newArr);

// Q10. Write a program that calculates a single value from an array using the reduce() method
let sum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum);