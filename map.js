// NOTE understanding map:
const numbers = [12, 35, 63, 23, 67, 15];
numbers.map(function(element, index , array){       //NOTE we can get element and their index and the full array form map.
    console.log(element, index , array);
})

// NOTE at first normal forLoop which can make a number square and give result in an array:
const number = [11, 23, 43, 54];
const result = [];
    for (let i = 0; i < number.length; i++) {
        element = number[i];
        square =  element * element;
        result.push(square);
    }
    
console.log(result);

// NOTE if we want to get each element of an array with square result, but result will be an array of all square element, we can use map.
const number = [2, 3, 4, 5, 6, 7];
const square = number.map(function(element){
    return element * element;
})
console.log(square);

// NOTE declared map function with an easy way:
const number = [2, 3, 4, 5, 6, 7];
const result = number.map(x => x * x);
console.log(result);

// NOTE remember: map function is a function which gives results in an array.