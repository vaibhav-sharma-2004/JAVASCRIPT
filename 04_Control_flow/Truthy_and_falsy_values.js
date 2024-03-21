
//TRUTHY AND FALSY VALUES ARE THE VALUES THAT ARE ASSUMED TO BE TRUE OR FALSE AS A CONDITION

const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//it is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

//SYNTAX
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")