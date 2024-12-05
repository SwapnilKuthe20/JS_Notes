// What is a Recursive Function ?

// A recursive function is a function that calls itself repeatedly to solve smaller instances of the same problem,
// eventually reaching a base case to stop recursion.


// Structure of a Recursive Function :

// 1. Base Case: The condition where the recursion stops.
// 2. Recursive Step: The part where the function calls itself.

// // Scenarios ::

// 1. factorial 

function factorial(n) {
    if (n === 0) { // Base Case
        return 1;
    }
    return n * factorial(n - 1); // Recursive Step
}

// console.log(factorial(5)); // Output: 120






