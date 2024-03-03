const score=100

//EXPLICITLY DEFINING Number DATATYPE
const age=new Number(20)

console.log(score);
console.log(age);


//CONVERTS NUMBER TO STRING
console.log(score.toString());

//TO FIX DECIMAL DIGITS
console.log(score.toFixed(2));

//ROUNDS THE NUMBER TO THE GIVEN SIGNIFICANT DIGITS 
const marks=20.6
console.log(marks.toPrecision(2));

//SHOWS THE COMMA IN GIVEN NUMBER IN US SYSTEM 
const value=123456
console.log(value.toLocaleString());

console.log(value.toLocaleString('en-IN'));//THIS SHOWS COMMAS IN INDIAN SYSTEM


//******************************************* MATHS *********************************************


console.log(Math);

//ABSOLUTE VALUE
console.log(Math.abs(-4));

//ROUND OFF VALUE
console.log(Math.round(4.6));

//ROUND OFF TO MINIMUM VALUE
console.log(Math.ceil(4.2));

//ROUND OFF TO UPPER VALUE
console.log(Math.floor(4.9));

//RETURNS MINIMUM OF THE GIVEN VALUES 
console.log(Math.min(4, 3, 6, 8));

//RETURNS MAXIMUM OF GIVEN VALUES
console.log(Math.max(4, 3, 6, 8));

//IT RETURNS RANDOM VALUE BETWEEN 0 AND 1
console.log(Math.random());

//IT WILL GIVE VALUE FROM 1 TO 9 BEFORE DECIMAL, WE ARE ADDING 1 AT THE END TO AVOID 0
console.log((Math.random()*10) + 1);

//IT RETURNS SINGLE INETEGER VALUE AS WE HAVE USED FLOOR FUNCTION
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//IT RETURNS VALUE BETWEEN THE GIVEN RANGE
console.log(Math.floor(Math.random() * (max - min + 1)) + min)