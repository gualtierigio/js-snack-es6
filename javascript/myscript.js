


const numbers1To20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let a = 3;

let b = 12;

numbersRange = [];

function composeArray(totNmbers,numA,numB){


    totNmbers.forEach(element => {
       
    
        if (element >= numA && element <= numB){
            numbersRange.push(element)
        }
     
    });

    return numbersRange

};

composeArray(numbers1To20,a,b)

console.log(numbersRange);


const filterRange = numbers1To20.filter(element =>  element >= a && element <= b)

console.log(filterRange);

