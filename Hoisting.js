// // NOTE hoisting / pull up a variable;
// function sum(x, y){
//     const result = x + y;
//     if(result > 9){
//         var mood = "good";      //NOTE var hoisting/pulling the mood variable. but it is inside of sum function because, sum function is parent function fo if condition. 
//         const feelings = "bad"; //NOTE const is not hoisting/pullingUp the feelings variable. so the scop of feeling variable is inside of if(){} condition.
//         let attitude = "low";   //NOTe let is not hoisting/pullingUP the attitude variable. so the scop of attitude variable is inside of  if(){} condition.
//     }
//     console.log(mood);
//     console.log(feelings);
//     console.log(attitude);

// }
// const inputOfSum = sum(5, 7);

// NOTE error vs undefined while hoisting:
console.log(man);     
var man = 3;      //NOTE as we declared man variable as var, it hoisting the man variable but not the value of man variable . so that the result will be 
                    //undefined because console.log(man) can find or access the man variable but not the value of nam variable. if console.log(man) can't
                    //find or access man variable it will return a error as result.

//NOTE error from let or const wile hosting:
console.log(animal);     
let /**or const */ animal = 3;  //NOTE it will return a error as result because let cant hoisting a variable.

// REVIEW summary is: let & const are scop variable and var is non semi-scop variable. it sets scop of a variable which declared by var to his parent function. 
// but var can't hoisting the the value of variable .