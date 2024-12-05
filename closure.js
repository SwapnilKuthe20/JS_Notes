// :: Closures in JavaScript ::

// A closure is a function that "remembers" the environment in which it was created. 
// Closures allow a function to access variables from an outer scope, even after that outer function has finished execution.

// ::  Key Characteristics of Closures ::
//   1.   Function inside a function: A closure occurs when a function is defined inside another function,
//        and the inner function references variables from the outer function.
//   2.   Access to outer function's variables: Even if the outer function has finished execution, 
//        the inner function can still access the variables from the outer scope.

// Example of Closure -->

function outer() {
    var outerVar = "I am from outer function"; // Variable in outer scope

    function inner() {
        console.log(outerVar); // inner function has access to outerVar
    }

    return inner; // returning the inner function creates a closure
}

const closureExample = outer(); // outer() finishes execution
// closureExample(); // "I am from outer function"

// Explanation:

// inner() is a closure because it continues to "remember" and can access outerVar even after outer() finishes execution.
// The function inner() has access to its own scope and the outer() function's scope, creating a closure.

// ---------------------------------------------------------------------------------------------------------

function multiplier(factor) {
    console.log(factor, "fact");

    return function (number) {
        console.log(number, "number");

        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15 