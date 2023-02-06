function factorial(number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result = result * i;
    }
    return result;
}

let results = factorial(4);
 console.log(results);