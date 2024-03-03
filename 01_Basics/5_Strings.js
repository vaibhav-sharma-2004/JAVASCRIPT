const city="delhi"
const distance=100

//BEST WAY TO CONCATENATE STRINGS
console.log(`hello ${city} is ${distance} away from Haryana`);

const getName=new String("Vaibhav-Sharma")

//PRINTS THE CHARACTER OF DESIRED INDEX
console.log(getName[5]);

//RETURNS TOTAL LENGTH OF GIVEN STRING
console.log(getName.length)

//CONVERTS THE GIVEN STRING TO UPPERCASE
console.log(getName.toUpperCase());

//RETURNS CHARACTER AT GIVEN INDEX
console.log(getName.charAt(5));

//RETURNS INDEX OF GIVEN CHARACTER
console.log(getName.indexOf('a'));

//RETURNS DESIRED SUBSTRING 
console.log(getName.substring(0,4));

//SAME AS SUBSTRING
console.log(getName.slice(-14,5));

//REMOVES SPACES BEFORE STARTING OF STRING AND AFTER ENDING OF GIVEN STRING
const house="    delhi india    "
console.log(house);
console.log(house.trim());


//REPLACES CHARACTER WITH ANOTHER CHARACTER
console.log(getName.replace('-','@'));

//RETURNS BOOLEAN VALUE AFTER COMPARISION
console.log(getName.includes('not'));

//DIVIDES THE STRING FROM GIVEN CHARACTER
console.log(getName.split('-'));