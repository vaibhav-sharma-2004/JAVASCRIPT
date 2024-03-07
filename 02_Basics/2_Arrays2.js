const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//IT WILL NOT CORRECTLY CONCATENATE THE ARRAYS AND RETURN ARRAY WITHIN A ARRAY
marvel_heros.push(dc_heros)

console.log(marvel_heros);

//IT WILL RETURN ELEMENT AT GIVEN INDEX
console.log(marvel_heros[0]);

//THIS IS THE WAY TO CONCATENATE TWO ARRAYS
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//THIS IS THE BEST METHOD FOR CONCATENATION OF ARRAYS 
const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//IT WILL CONVERT THE Nth DEEP ARRAY TO 1D ARRAY
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//IT IS A BOOLEAN METHOD TO CHECK IF GIVEN PARAMETER IS ARRAY OR NOT
 console.log(Array.isArray("vaibhav"))

//
console.log(Array.from("VAIBHAV"))
console.log(Array.from({name: "VAIBHAV"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

//THIS IS ALSO USED FOR CREATING ARRAY WITH GIVEN PARAMETERS
console.log(Array.of(score1, score2, score3));