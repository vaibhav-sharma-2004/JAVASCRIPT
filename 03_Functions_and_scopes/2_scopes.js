var a=10
let b=20

if(true){

    a=1 // THIS a WILL HAVE SCOPE OUTSIDE THE FUNCTION AS IT IS OF var DATATYPE SO THIS WILL CREATE A PROBLEM THAT'S WHY WE ALWAYS USE let DATATYPE
   let b=2
    console.log("inner:",a,b);
}


console.log(a); //IT WILL GIVE THE VALUE OF a THAT WAS IN THE FUNCTION 
console.log(b);


function fun1(){

    const name="vaibhav"

    function fun2(){
        const lastname="sharma"

        console.log(name);
    }

    //console.log(lastname); // THIS WILL THROW ERROR BECAUSE SCOPE OF lastname IS WITHIN fun2 
    fun2()
}

fun1()


//IN THIS CASE ALSO THE SCOPE OF VARIABLES ARE WITHIN THE FUNCTION ONLY,SAME AS ABOVE
if (true) {
    const username = "vaibhav_sharma"
    if (username === "vaibhav_sharma") {
        const role = " developer"
         console.log(username + role);
    }
     //console.log(website); //IT WILL RETURN ERROR
}