function getOddNumbers(number){
    for(let i =0; i < number.length; i++){
        const index = i;
        const element = number[index];

        if(element % 2 !== 0){
            console.log(index, element);
        }
    }
}

let numbers = [7, 8 ,99, 78, 25, 66, 51, 24, 75, 91, 98];
getOddNumbers(numbers);