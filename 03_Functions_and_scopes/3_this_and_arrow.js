const user = {
    username: "vaibhav",

    message: function() {
        //THIS KEYWORD IS USED TO REFER TO THE CURRENT CONTEXT OF THE GIVEN PARAMETER ie THE SCOPE OF THE PARAMETER
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.message()


function classNo(){

    let size=122
    console.log(this.size); //IT WILL RETURN UNDEFINED VALUE BECAUSE this KEYWORD DOES NOT WORK IN FUNCTIONS
}

classNo()



//SYNTAX FOR ARROW FUNCTION
const addNum=(num1,num2) =>{
    return num1+num2
}

console.log(addNum(5,6));
//IMPLICIT ARROW FUNCTION FOR SINGLE LINE OF CODE ,IT DOES NOT CONTAIN RETURN KEYWORD AND INSTEAD OF {} USE ()
const subNum=(num1,num2) => (num1 - num2)

console.log(subNum(10,5));