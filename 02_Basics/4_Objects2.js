// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);


//IMPLEMENTING OBJECT IN A OBJECT
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vaibhav",
            lastname: "sharma"
        }
    }
}

//ACCESSING ELEMENTS FROM OBJECT IN OBJECT 
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 const obj5 = { obj1, obj2 }

//FUNCTION TO CANCATENATE OBJECTS ,THE FIRST PARAMETER IS TREATED AS FINAL OBJECT
 const obj6 = Object.assign({}, obj1, obj2, obj4)

//BEST WAY TO CONCATENATE OBJECTS JUST AS ARRAY
 const obj3 = {...obj1, ...obj2}
 console.log(obj3);

//STORING OBJECTS IN ARRAY
const users = [
    {
        id: 1,
        email: "vaibhav@gmail.com"
    },
    {
        id: 1,
        email: "sharma@gmail.com"
    },
    {
        id: 1,
        email: "vsharma2004@gmail.com"
    },
]

//ACCESSING OBJECT ELEMENTS FROM ARRAY
console.log(users[1].email);
console.log(tinderUser);

//.keyS() FUNCTION RETURNS THE KEY VALUES OF THE GIVEN OBJECT ,STORES IT IN ARRAY
console.log(Object.keys(tinderUser));

//.values() FUNCTION RETURNS THE ASSIGNED VALUES TO THE KEYS IN GIVEN OBJECT,STORES IN FORM OF ARRAY
console.log(Object.values(tinderUser));

//.entries() FUNCTION RETURNS KEY,VALUE PAIR IN FORM OF ARRAY
console.log(Object.entries(tinderUser));

//IT IS A BOOLEAN FUNCTION TO CHECK THE GIVEN PARAMETER IS ELEMENT OF OBJECT OR NOT
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "youtube"
}

//THIS IS CALLED OBJECT DESTRUCTURING
const {courseInstructor} = course
 console.log(courseInstructor);

//THIS IS CALLED OBJECT DESTRUCTURING ,HERE WE CAN ALSO MODIFY THE ELEMENT NAME TO CALL IT EASILY
const {courseInstructor: instructor} = course
console.log(instructor);