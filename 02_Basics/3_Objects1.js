// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

//DELCARING OBJECT IN JS
const JsUser = {
    name: "vaibhav",
    "full name": "vaibhav",
    [mySym]: "mykey1",//FOR SYMBOL DECLARATION IN OBJECT WE HAVE TO USE [] ELSE IT WILL BE CONSIDERED AS STRING DATA TYPE
    age: 18,
    location: "delhi",
    email: "sharma@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //THIS IS BETTER METHOD TO ACCESS ELEMENTS OF OBJECT
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"

//THIS FUNCTION WILL FREEZE ANY CHANGE IN GIVEN OBJECT ie IT WILL NOR CHANGE THE VALUE OF ANY ELEMENT NEITHER INSERT NEW ELEMENT IN OBJECT
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//THIS KEYWORD IS USED AS A POINTER THAT POINTS TO THE ELEMENT OF THE OBJECT WE ARE WORKING ON 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());