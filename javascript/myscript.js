


const numbers1To20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let a = 3;

let b = 12;

numbers1To20.forEach(element => {
    numbersRange = [];
   
    numbersRange.push(element > a && element < b)
 
});

console.log(numbersRange);
