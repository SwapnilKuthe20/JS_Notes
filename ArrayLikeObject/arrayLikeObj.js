//// ::: Array-like Object :::

// Documnet Object Model ::::

// Browser reads html file and then convert it into document object, 
// and put it into window obj

// we can ommit window object

// console.dir(window.document);
// console.log(document);
// console.dir(document);

//// :::: DOM TREE ::::

//// Document --> Root Node
//// html --> Root element / child node of document
//// head --> child node of html tag
//// body --> child node of html tag
// -------------------------------------------------------------------------------

//// 1. What is an array-like object in JavaScript ?

//// array-like object looks like array but do not inherit from Array.prototype.
//// array-like object is an object that has a length property and indexed elements
//// but does not have array methods like push, map, or filter.
//// Examples include arguments, NodeLists, and strings.
// -------------------------------------------------------------------------------

//// 2. How can you convert an array-like object into a real array ?

//// by using Array.from() and spread operator and Array.prototype.slice.call
// -------------------------------------------------------------------------------

//// 3. What are some common examples of array-like objects in JavaScript ?

//// arguments object in functions
//// DOM NodeLists (e.g., document.querySelectorAll)
//// Strings (e.g., 'hello' can behave like an array)
// ------------------------------------------------------------------------------

//// 4. How would you iterate over an array-like object ?

//// by using forEach() we can iterate over an array.
//// --------------------------------------------------------------------------

//// arguments object in functions --> array-like obj

function sum() {
    console.log(arguments, '..arguments');

    return Array.from(arguments).reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
//// ------------------------------------------------------------------------

//// document.querySelectorAll('.nav-item') ---> nodeList
//// returns : nodeList (Array like obj) --> we can use indexing and length prop
//// we can use forEach loop over nodeList[]

const allItems = document.querySelectorAll('.nav-item');
console.log(allItems);
allItems.forEach((item) => {
    console.log(item, '...items');

});

//// -------------------------------------------------------------------------

//// ::: HTMLCollection ::::

//// HTMLCollection is a collection of HTML elements.
//// It is one of the types of collections used to represent a group of DOM elements.
////  The browser provides an HTMLCollection object when you query the DOM for multiple elements,
//// such as when using document.getElementsByTagName() or document.getElementsByClassName().

//// document.getElementsByClassName('nav-item') ---> HTMLCollection

//// we can use --> for loop, for of loop to iterate over HTML Collection
//// we can't use --> forEach loop to iterate over HTML Collection

//// getElementsByClassName-- > returns HTMLCollection[]
//// querySelectorAll --> returns nodeList[]
//// we can't use forEach loop over HTMLCollection[]

//// -----------------------------------------------------------------------------------------



