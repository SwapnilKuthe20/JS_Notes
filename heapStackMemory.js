// :: Heap Memory and Stack Memory ::

// 1.  The call stack is where the function calls are placed, and it is limited in size.
// 2.  The heap is where objects, arrays, and functions are stored in memory, and it’s much larger.
//     It's dynamic memory allocated during runtime.


// 1. Stack Memory ::
//     Stack memory is used for primitive data types(such as numbers, strings, and booleans)
//     and function calls.
//     It is organized in a Last - In, First - Out(LIFO) manner,
//     meaning the last thing added to the stack is the first thing to be removed.

// Stack Memory Characteristics:
//      Memory is freed automatically when a function call finishes.
//      No Garbage Collection: It doesn't require explicit cleanup; 
//      once a function execution completes, its memory is automatically reclaimed.

// Why Primitives Go in the Stack ?? ::

//  Size and Simplicity: 
//      Primitive values are simple and fixed - size.
//      A number like 5 is just a number, and a string like "hello" is a sequence of characters.
//      They don’t need to be complex objects that grow or shrink over time, so they are small and static.

// Fast Access: 
//      Because stack memory operates on a Last - In, First - Out(LIFO) principle,
//      adding and removing data is very quick.When you push a primitive value onto the stack,
//      it's straightforward to find and remove. Once the function or scope ends,
//      the primitive value is automatically popped off the stack, freeing up space.

// ----------------------------------------------------------------------------------------------------------

// 2. Heap Memory ::
//       Heap memory is used for objects, arrays, and functions(including closures),
//       and it is where the dynamic memory allocation occurs.Unlike stack memory,
//       heap memory is not organized in a LIFO manner and has a more complex structure.

// Heap Memory Characteristics :
//      Dynamic Sizing: Objects can grow in size or shrink as needed.
//      Garbage Collection: When an object or array is no longer referenced by any part of the program,
//      it is automatically cleaned up by the garbage collector.


// Que --> Why Objects Go in the Heap ?? 
// Dynamic Size: 
//      Objects in JavaScript can contain multiple properties and methods.Their size can vary,
//      and they might need to be resized or changed as the program runs. 
//      This dynamic behavior makes them unsuitable for stack memory, which has a fixed size.

// Garbage Collection: 
//      Objects are stored in the heap, and the garbage collector manages their memory.
//      The heap is designed to handle objects that may have a longer lifespan and require dynamic allocation.


// Que --> Why Store Only References in the Stack ??
// Efficiency : 
//          Storing the reference(a small memory address) in the stack 
//          instead of the entire object keeps things efficient.
//          Imagine if we tried to store a large array or object directly in the stack—
//          this would quickly consume too much stack space, potentially causing a stack overflow.

// Object Sharing:
//          Multiple variables can hold the same reference to an object, 
//          allowing them to share the object.If the object were stored directly in each variable,
//          memory would be wasted and there would be no way to track changes in a single object.

// ----------------------------------------------------------------------------------------------------------

// 1. Example Showing Stack vs Heap in Action -->

function example() {
    let x = 5;                  // x is stored in stack memory
    let y = { value: 10 };      // y is a reference, the object is stored in heap memory

    y.value = 20;               // The value of 'y' is updated, but it still refers to the same object in heap
    return y.value;             // Stack memory is used for local variables, heap is used for the object
}

example();

// 2. Example: Stack and Heap Interaction -->

function example() {
    let x = 10;                // 'x' is stored in the stack directly.
    let y = { name: "Alice" }; // 'y' is a reference stored in the stack, pointing to the object in the heap.

    console.log(y.name);       // Access the object in the heap using the reference stored in the stack.
}

// ----------------------------------------------------------------------------------------------------------

