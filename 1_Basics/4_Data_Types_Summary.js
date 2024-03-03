/*
THERE ARE MAINLY TWO TYPES OF DATA TYPES:

1)PRIMITIVE DATA TYPE=> number, boolean, string, null, symbol, undefined, Bigint
2)NON PRIMITIVE/REFERENCE DATA TYPE=> Array, Objects, Functions


****IMPORTANT: PRIMITIVE DATATYPE USES STACK MEMORY SO IT PASSES A COPY OF DATA, THUS THE ORIGINAL DATA WILL NOT CHANGE AFTER USING DIFFERENT METHODS
             
             :NON PRIMITIVE DATATYPE USES HEAP MEMORY SO IT PASSES THE ORIGINAL DATA, THUS ORIGINAL DATA CHANGES ON APPLYING DIFFERENT METHODS
*/

//PRIMITIVE DATA TYPE
//number 
const value=100
const integerVal=100.5

//boolean
const isSafe=true


//string 
const name="vaibhav"

//null
let balance=null


//symbol
const id1=Symbol(361)
const id2=Symbol(361)

console.log(id1==id2); //THIS WILL RETURN FALSE VALUE BECAUSE WE HAVE USED symbol DATA TYPE

//undefined
let marks;

//Bigint
const stock=362836532784946n //THIS IS SYNTAX FOR Bigint 



//NON-PRIMITIVE DATA TYPE

//Array
let collegeId=[123,543,8634]

//Objects
let myObj={

    name:"vaibhav",
    age:20,
}

//Functions
let myFun=function(){
    console.log("hello");
}
                              //BOTH SYNTAX ARE CORRECT FOR DEFINING A FUNCTION -:ALWAYS USE function KEYWORD

function Fun(){
    console.log("my name");
}
