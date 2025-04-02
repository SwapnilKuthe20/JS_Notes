// filter() : 
//          The filter() method is used to create a new array with elements that pass a certain condition. 
// 	        It does not modify the original array; instead, it returns a new filtered array.

// 	Syntax : array.filter(callbackFunction(element, index, array), thisArg);
// 		    
//          callbackFunction: A function that runs on each array element.
// 			element: The current element being processed.
// 			index (optional): The index of the current element.
// 			array (optional): The original array.
// 			thisArg (optional): A value to use as this when executing callbackFunction.

// Key Takeaways ::
//               filter() does not modify the original array; it creates a new array.
//               It is commonly used for searching, sorting, and filtering data in real-world applications.
// -------------------------------------------------------------------------------------------

// ::: Realword Examples :::

// 1. Filtering Out Adults (Above 18)

let studentAge = [21, 24, 25, 15, 17, 18, 10, 34, 6, 10];

let above18 = studentAge.filter((age) => {
    return age >= 18
})

// console.log(above18);
// -------------------------------------------

// 2. Filtering Available Products in an E-commerce Store.
const products = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Phone", price: 20000, inStock: false },
    { name: "Tablet", price: 15000, inStock: true },
];

let availableProducts = products.filter(product => product?.inStock === true)
// console.log(availableProducts);
// -------------------------------------------

// 3. Filtering Emails with .com Domain.

const emails = ["user@gmail.com", "admin@yahoo.in", "test@outlook.com", "info@company.org"];

let dotComEmails = emails.filter((email) => {
    return email.endsWith(".com");
})
console.log(dotComEmails.join(", "));
// -------------------------------------------

