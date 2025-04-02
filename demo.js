//  Function ::::


function addNumbers() {
    console.log(arguments, "length");


    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

let addition = addNumbers(4, 5, 6, 10);
console.log(addition);




