const isUserloggedIn = true
const temperature = 41

//=== is used to compare values as well as data types of given parameters
if ( temperature === 40 ){
    console.log("less than 50");
}

else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
//<, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);


const balance = 1000

//IT IS A VALID SYNTAX BUT NOT RECOMMENDED 
if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
    
}
else if (balance < 900) {
    console.log("less than 750");
    
}
else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//TO CHECK MORE THAN ONE CONDITIONS WHERE ALL CONDITIONS SHOULD BE TRUE
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

//TO CHECK MORE THAN ONE CONDITION WHERE ANY OF THE GIVEN CONDITION SHOULD BE TRUE
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}