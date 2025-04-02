
// Callback - is a function that is pass as an argument to the another function.

// it is used to handle asynchronous operations like -
// 1. Reading a file
// 2. Network requesting
// 3. Interacting with Database.


function hello(callback) {
    console.log("Hello");

    setTimeout(() => {
        console.log("Settimeout");
    }, 3000)

    callback();

}

function goodBye() {
    console.log("Goodbye !!");
}

hello(goodBye)









