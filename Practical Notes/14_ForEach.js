// forEach() - The forEach() method in JavaScript is used to iterate over an array 
//  and execute a function for each element. It is one of the most commonly used array methods for 
// performing operations like logging, modifying elements, or calling an API for each item.
// It does not return a new array and does not break out of the loop early (unlike for or for...of loops).

// array.forEach(function(element, index, array) {
//     // Code to execute
// }, thisArg);

// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array forEach() is iterating over.
// thisArg (optional): The value to use as this when executing the function.

// Key Features of forEach()
// Does not return a new array: Unlike map(), forEach() does not return a new array.
// Cannot break out early: Unlike for or while, forEach() does not support break or continue.
// Executes a callback function for each element.
// ------------------------------------------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((element, index, array) => {
//     console.log(element);       // 1,2,3,4,5,6
//     console.log(index);         // 0,1,2,3,4,5
//     console.log(array);         // [1, 2, 3, 4, 5, 6]
// })

let newArr = [];
arr.forEach((num) => {
    // newArr.push(num * 2)
    // newArr.push(Math.pow(num, 2))           // square
    // newArr.push(Math.pow(num, 3))       // Cube
})

console.log(newArr.join(", "));

// ---------------------------------------------------

let fruits = ['apple', 'banana', 'cherry', 'papaya'];

fruits.forEach((fruit) => {
    // console.log(fruit[0].toUpperCase() + fruit.slice(1));       // 1st Capital
    // console.log(fruit.toUpperCase());                           // All Capitals
})
// ---------------------------------------------------

let arr1 = [11, 22, 33, 44, 55];        // find total

let sum = 0;
arr1.forEach((num) => {
    sum += num
})
// console.log("Sum :", sum);
// ---------------------------------------------------
//  Formating Dates :::

let dates = ["1-4-2025", "2-4-2025", "3-4-2025", "4-4-2025"];
let formatedDates = [];

dates.forEach((date) => {
    let format = date.split("-").join("/");
    formatedDates.push(format);
})

console.log(formatedDates);
// ---------------------------------------------------























