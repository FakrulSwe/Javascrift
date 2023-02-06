function leapYears(year){
    // console.log("Have a lex");
    if(year % 4 === 0){
        console.log("Its a leap Year");
    }
    else{
        console.log("Its not a leap Year");
    }

}

function hasEven(number){
    // console.log("to many");
    if(number % 2 ==0){
        return true;
    }
    else{
        return false;
    }
}

leapYears(1952);

let getNumber = hasEven(13);
console.log(getNumber);

switch(getNumber){
    case true:
        console.log("Its even Number");
        break;
    default:
        console.log("Its a odd");
}