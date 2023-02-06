function getNumbers(number){
    // console.log("have a relax");
    let sum = 0;
    for( let i=0; i<number.length; i++){
        // console.log(number[i]);
        const index =i;
        const element = number[index];
        sum = sum + element;
        console.log(index, element," = ", sum);
        

    }
}

let numbers = [5, 8, 8, 15, 78, 91, 74, 95, 81, 12, 34, 75];
getNumbers(numbers);