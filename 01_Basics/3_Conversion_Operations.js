let score="100"

console.log(typeof score);

//HERE THE FUNCTION Number WILL CONVERT ANY GIVEN DATATYPE TO number DATATYPE
let ValueInNum=Number(score)
console.log(ValueInNum);

//IF WE CONVERT A NON-CONVERTABLE VALUE TO number THEN IT WILL RETURN NaN AS OUTPUT WHICH MEANS NOT A NUMBER eg:
let name="vaibhav"

let changeName=Number(name)
console.log(changeName);

/*
SOME CASES FOR number DATATYPE CONVERSION:
1) "100"->100
2) "100vaibhav"->NaN
3) true->1,false->0


SOME CASES FOR boolean DATATYPE CONVERSION:
1) 1->true
2) 0->false
3) ""->false
4) "non-empty string"->true
*/