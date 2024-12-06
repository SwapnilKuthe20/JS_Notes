//// ::: localStorage :::

//// Local storage is use to save value more permanently.
//// variables are temprory.
//// if we refresh / close the page , all the variables are deleted.
//// localStorage doesn't get deleted when we refresh the page.

//// :: localStorage only supports Strings. ::\

localStorage.setItem("Name", "Swap-Neel");

console.log(localStorage.getItem("Name"));

//// Using localStorage we can able to get the value that we save earlier.
//// even though we refresh the page.
// ---------------------------------------------------------------------------

let name = "S Kumar";
let localstorageItem = localStorage.setItem("name", name);  // name var is string so set to localStorage.
console.log(localstorageItem);      // "s Kumar"

//// :: If we have to store Object into localStorage -->

let Game = {
    score: 20,
    rating: 8
}

let gameResult = localStorage.setItem("gameResult", Game);
console.log(gameResult.gameResult);         // [object object]

////  not set because localStorage only supports string.
////  so first we convert obj to json obj using stringify.
//// 

let gameResult1 = localStorage.setItem('gameResult1', JSON.stringify(Game))
console.log(gameResult1);


//// ::: To remove the items from localStorage use localStorage.remove() method :::

let setLocalSt = localStorage.setItem("msg", "Happy diwali")
localStorage.removeItem(setLocalSt);







