//SYNTAX FOR A FUNCTION
function myName(){
    console.log("vaibhav sharma");
}

//FUNCTIONS CAN ALSO BE DECLARED WITH THIS SYNTAX

const name= function myname(){
    console.log("vaibhav sharma");
}




function addNumber(num1,num2){ //THESE ARE THE PARAMETERS PASSED TO A FUNCTION
    num3=num1+num2;

    return num3
}

let result =addNumber(5,6)
console.log(result);


//WE CAN ALSO USE DEFAULT PARAMETER WHEN NO ARGUMENT IS PASSED IN FUNCTION
function user(name="vaibhav"){
    console.log(name);
}

user()


//WE CAN USE ... OPERATOR FOR UNKNOWN OR MORE THAN 2 NO OF PARAMETERS
function salary(...num){

    console.log(num);
}

let empSal=salary(10000,20000,30000,3000,4000)


//WE CAN ALSO USE OBJECT AND ARRAY AS PARAMETER 
function course(any){
    
    console.log(`course name is ${any.name} and price is ${any.price}`);
}

//PASSING OBJECT AS PARAMETER
course({
    name: "javascript",
    price:2500
})


function marks(arr){
    console.log(arr[0]);
}

//PASSING ARRAY AS A PARAMETER
let res=marks([10,20,30,40,50])





//****************************IMPORTANT****************************/

console.log(addone(5))

function addone(num){  //FOR THIS SYNTAX WE CAN CALL THE FUNCTION BEFORE DECLARATION
    return num + 1
}



//addTwo(5)
const addTwo = function(num){  //THIS SYNTAX WILL THROW ERROR IF WE CALL FUNCTION BEFORE DECLARATION 
    return num + 2
}