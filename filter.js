// // NOTE finding number which is less then 5 with normal forLoop (result should be in an array):
// const number = [1, 2, 3, 4, 5, 6, 7];
// const result = [];
// for (let i = 0; i < number.length; i++) {
//     element = number[i];
//     if(element < 5){
//         result.push(element);
//     }
// }
// console.log(result);

// NOTE now finding number less then 5 with filter method (result should be in an array):
const number = [1, 2, 3, 4, 5, 6];
const result = number.filter(x => x < 5);
console.log(result);