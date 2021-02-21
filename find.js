// // NOTE finding a number which is less then 5 with normal forLoop:
// const numbers = [1, 2, 3, 4, 5];
// const findLess = [];
// for (let i = 0; i < numbers.length; i++){
//     element = numbers[i];
//     if(element < 5){
//         findLess.push(element);
//         break;
//     }
// }
// console.log(findLess);

// // NOTE finding a number which is less then 5 with find method:
// const numbers = [1, 2, 3, 4, 5];
// const findLess = numbers.find(x => x < 5);   // //NOTE filter give an array in result but find give a single number as result;
// console.log(findLess);