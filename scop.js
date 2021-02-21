// NOTE scop means the limit of the variable.
// NOTE an example of scop:
const bonus = 5;    //NOTE it is a global scop. cause it is out side of an function and it can be use in any function and forLoop.
function sum(x, y){
    const result = x + y + bonus;
    return result;
}
const sumValues = sum(2, 3);
console.log(result);    // NOTE here, the scop of the result variable is under function. it means it can't be called out side of function.so,
// in terminal console.log(result) will be: result is not defined,
console.log(sumValues);