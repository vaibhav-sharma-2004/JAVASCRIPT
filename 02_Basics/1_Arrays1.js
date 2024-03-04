// ARRAY IS A SET OF ELEMENTS AND IN JS IT CAN CONTAIN ELEMENTS OF MIXED DATA TYPES ALSO

const myArr = [0, 1, 2, 3, 4, 5]
const myName = ["vaibhav", "sharma"]

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);

// ARRAY METHODS

//INSERTION AND DELETION FROM END OF A ARRAY
myArr.push(6)
myArr.push(7)
myArr.pop()

//INSERTION AND DELETION FROM STARTING OF AN ARRAY
myArr.unshift(9)
myArr.shift()


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

//JOIN METHOD CONVERTS ARRAY TO STRING DATA TYPE
const newArr = myArr.join()

console.log(typeof myArr);
console.log( newArr);


// slice, splice

/*DIFFERENCE IN SLICE AND SPLICE :
SLICE RETURNS THE DATA BETWEEN GIVEN INDEX AND DOES NOT INCLUDE LAST INDEX AND MOST IMPORTANTLY IT DOES NO CHANGE THE ORIGINAL ARRAY

WHEREAS SPLICE RETURNS THE DATA BETWEEN GIVEN INDEX AND INCLUDES LAST INDEX AND MOST IMPORTANTLY CHANGES THE ORIGINAL ARRAY
 */

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

