
// :: Scope in JavaScript ::

// Scope refers to the context in which variables and functions are accessible in your code. 
// It defines the visibility and lifecycle of variables. There are several types of scope in JavaScript:

// 1. Global Scope :

// Variables declared outside of any function are in the global scope.
// They are accessible from anywhere in the code, including inside functions.

// 2. Function Scope :

// Each function creates its own scope.
// Variables declared inside a function are only accessible within that function.

// 3. Block Scope (with let and const):

// Variables declared inside a block (e.g., if, for) using let or const are only accessible within that block.

// 4. Lexical Scope:

// JavaScript uses lexical scoping, meaning the scope is determined 
// by where variables and functions are declared in the source code, not where they are called from.

// Key Points ::
//  1.  Lexical scoping means that functions "remember" the scope 
//      in which they were created, not the scope in which they are called.

//  2.  In simple terms, a function has access to variables from its own scope and
//      any outer (enclosing) scopes, but not to variables from inner (nested) scopes.

function outerFunction() {
    let outerVariable = "I'm from outer scope";

    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable
    }

    innerFunction();
}

outerFunction();

// 1.  The innerFunction has access to the outerVariable even though outerVariable is defined in outerFunction.
// 2.  This is because innerFunction is lexically scoped, meaning it "remembers" the scope
//      in which it was defined (which includes the outerFunction scope).
// ----------------------------------------------------------------------------------------------------------









