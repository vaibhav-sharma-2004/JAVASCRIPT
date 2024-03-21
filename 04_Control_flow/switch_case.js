//SYNTAX FOR SWITCH CASE
switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = "march"

//USING BREAK IS ESSENTIAL IN SWITCH CASE ELSE IT WILL PRINT ALL THE CASES
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}