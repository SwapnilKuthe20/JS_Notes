
// The Event Loop and Callback Queue ::
//      are key components of JavaScript's concurrency model,
//      allowing asynchronous operations to run efficiently without blocking the main thread.

// Key Takeaways ::
//        Call Stack : Executes synchronous code.
//          Web APIs : Handles asynchronous operations like timers and events.
//    Callback Queue : Stores callbacks that need to be executed after synchronous code finishes.
//        Event Loop : Moves tasks from the Callback Queue to the Call Stack when it's empty.
//  Microtasks Queue : Processes promises before the Callback Queue, ensuring microtasks run before macrotasks.

// Event Loop:
//   1.  It constantly looks at the call stack (which holds functions that are running)
//       and the callback queue (which holds functions waiting to run).
//   2.  If the call stack is empty,
//       the event loop picks the next function from the callback queue and puts it in the call stack for execution.
//   3.  The Event Loop continuously checks whether the call stack is empty.
//       If it is, it moves the first task from the Callback Queue to the call stack and executes it.
//       This ensures that asynchronous code doesn’t block the synchronous code.


// Callback Queue:
//  1.   It's a waiting line where functions sit until it's their turn to run.
//  2.   When the event loop finds that the call stack is empty,
//       it moves functions from the callback queue into the call stack to execute them.
//  3.   Callback Queue works on a FIFO basis. The first task that arrives will be the first to execute.


// ::: Microtasks vs Macrotasks :::
// Microtasks : are tasks like Promises that are executed before the Callback Queue.
//              Even if there are tasks in the Callback Queue,
//              the Event Loop will complete all the microtasks before moving to the Callback Queue.

// Macrotasks : include tasks like setTimeout, setInterval, and I/O operations.
//              These are executed after the microtasks are cleared.


// Event Loop & Web APIs ::

// 1.  For asynchronous operations like setTimeout(), fetch(), or DOM events,
//      the Web APIs(browser - based API) handle the operations.
// 2.  Once these operations are done, their callback functions are sent to the callback queue.
// 3.  The event loop constantly checks the call stack.If the stack is empty,
//      it pushes the next callback function from the callback queue into the stack for execution.

