// Understanding how JavaScript programs execute involves diving into topics like
// the execution context, call stack, event loop, memory management, and JavaScript engines like V8.

// Example Execution Flow:
//    1. JavaScript starts by creating the Global Execution Context.
//    2. It then encounters functions and creates new execution contexts for each one.
//    3. The engine processes synchronous code directly in the call stack.
//    4. When asynchronous functions (like a setTimeout) are encountered, 
//       the engine pushes them to the Web API (browser environment) or Node.js API (in Node.js), where they wait to be executed.
//    5. The event loop checks when the call stack is empty, then pushes the callback functions from the queue to the stack.


// Here's how you can start mastering this :
// :: Key Concepts to Learn ::

// Execution Context :
// What it is and its types (Global, Function, Eval).
// Phases : Creation and Execution.
// Variable environments and the role of the lexical environment.

// Call Stack :
// How function calls are managed.
// Stack overflow and recursion examples.

// Hoisting :
// How variables and functions are "moved" during the creation phase.

// Scope and Closures :
// The difference between global, function, and block scope.
// How closures retain access to their outer scope.

// Event Loop and Concurrency :
// How JavaScript handles asynchronous operations.
// Microtasks vs. Macrotasks.
// Interaction with Web APIs.

// JavaScript Engines :
// Understand how engines like V8 parse, interpret, and optimize code.
// The role of the Just-In-Time (JIT) compiler.

// Memory Management :
// How garbage collection works.
// Memory leaks and optimization techniques.

// Modules and Imports :
// Execution flow in ES6 modules.

// Async/Await and Promises :
// How asynchronous code executes and resolves.

// Advanced Debugging :
// Using developer tools to inspect execution flow and performance.
// -------------------------------------------------------------------------------------

// ::: Execution Context :::

//  The Execution Context in JavaScript is like an environment where your code runs.
//  It helps JavaScript keep track of variables, functions, and the code's current state.
//  Think of it as a "workspace" for your code to execute.

// ::: There are three main types :::

// 1. Global Execution Context ::

// Created when the script starts executing.
// Contains global variables (var, let, const) and functions.
// The this keyword refers to the global object (window in browsers, global in Node.js).

// 2. Function Execution Context ::

// Every time a function is called, a new execution context is created for that function.
// It manages:
// Function arguments.
// Local variables and functions.
// A reference to the outer context for scope chaining.

// 3. Eval Execution Context ::

// Rarely used; created for code executed inside the eval() function.


// ::: Phases of Execution Context :::

// 1. Creation Phase:

// The JavaScript engine prepares to execute the code.
// It does the following:
// Hoisting: Moves function and variable declarations to the top of the scope.
// Sets up the this value.
// Creates memory space for variables and functions.

// 2. Execution Phase:

// The code is executed line by line.
// Variables are assigned values, and functions are invoked.

// -------------------------------------------------------------------------------------

// :: Call Stack ::
// The call stack is a data structure that manages the order in which functions are executed.


// :: How the Call Stack Works ::

// Stack Structure :

// It's a Last In, First Out (LIFO) structure ::
// 1. The last function added to the stack is the first to be removed.
// 2. Think of it as stacking plates in a cafeteria: you add plates to the top and remove them from the top.

// :: Function Execution and the Call Stack ::

// When a function is called, JavaScript ::
// 1. Pushes it onto the call stack.
// 2. Executes the function.
// 3. When the function finishes, it pops it off the stack and goes back to where it was called.
// ----------------------------------------------------------------------------------------------

// :: Stack Overflow ::

//  If functions keep calling each other indefinitely (e.g., recursion without a base case),
//  the stack will keep growing. This can lead to a stack overflow,
//  where JavaScript runs out of memory to handle the stack.


// :: To prevent stack overflow in JavaScript, here are some key strategies ::
// 1.  Ensure Proper Base Case in Recursion
//     A base case is essential for recursion to terminate.
//     Without it, a function will keep calling itself indefinitely, causing a stack overflow.

// 2.  Use Iteration Instead of Recursion
//     Iteration (loops) avoids using the call stack and is often safer for tasks that would otherwise use recursion.

// 3.  Avoid Deep Recursion for Large Inputs
//     For large inputs, consider breaking the task into smaller pieces or use an iterative approach to avoid deep recursive calls.

// ----------------------------------------------------------------------------------------------




