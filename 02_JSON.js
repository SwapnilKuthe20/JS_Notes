
// // Convert Object into JSON object ::

const Student = {
    Name: 'Swapnil',
    Age: 24,
    Location: "Nagpur"
}

// // Above obj converted to JSON by using Stringify() Method.

 console.log(JSON.stringify(Student));   // {"Name":"Swapnil","Age":24,"Location":"Nagpur"}

// // Typeof JSON.stringify(Student) is String 
 console.log(typeof JSON.stringify(Student));   // string
// ---------------------------------------------------------------------------------------------
//  // ::: How to convert JSON into js Object :
// // to convert json into object we use parse() method .

const jsonObj = JSON.stringify(Student);
console.log(jsonObj);          // {"Name":"Swapnil","Age":24,"Location":"Nagpur"}
console.log(typeof jsonObj);   // string

const jsonToObj = JSON.parse(jsonObj);
console.log(jsonToObj, "...json to object");    // { Name: 'Swapnil', Age: 24, Location: 'Nagpur' }












