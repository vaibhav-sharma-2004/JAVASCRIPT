
let myDate=new Date()

//**DIFFERENT METHODS ON DATE 

//IT RETURNS DAY MONTH DATE YEAR AND TIME
console.log(myDate.toString());

//IT RETURNS DAY MONTH DATE AND YEAR FORMAT
console.log(myDate.toDateString());

//IT RETURNS MM/DD/YYYY, TIME FORMAT
console.log(myDate.toLocaleString());

//IT RETURNS YYYY-MM-DD TIME FORMAT
console.log(myDate.toISOString());

//DATE IS OF OBJECT DATA TYPE
console.log(typeof myDate);




//**WE CAN ALSO SPECIFY A DATE IN JS

//MONTH STARTS FROM 0 IN JS
let createDate=new Date(2024,2,4)
console.log(createDate);

let createdate= new Date(2024,2,4,5,3)//DEFINES DATE WITH TIME

//IN THIS TYPE OF DECLARATION MONTH STARTS FROM 1
let todayDate=new Date("2024-02-04")
console.log(todayDate);



//**MILLISECONDS
let TimeStamp=Date.now()


//TO GET INFO FROM DATE
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `