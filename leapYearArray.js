function leapYears(year){
    const leapYearArray = [];
    for(let i=0; i<year.length; i++){
        const index = i;
        const element = year[index];
        if(element % 4 ==0){
            // console.log(year[i],i);
            // console.log(index, element);
            leapYearArray.push(element);
        }
    } 
    return leapYearArray;
}

const years = [2023, 2024, 2025, 2028, 2030, 1952];

const leapYear = leapYears(years);
console.log(leapYear);
