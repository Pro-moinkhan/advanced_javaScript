// NOTE slice:
const array1 = [14, 23, 37, 42, 56, 61, 77, 81, 98];
const sliceArray = array1.slice(2,5);    //NOTE if we slice an array by their index we will get the result by an array in with sliced element;
console.log(sliceArray);
console.log(array1);                     //NOTE but the main array will remain same or un changed.

// NOTE splice:
const array2 = [14, 23, 37, 42, 56, 61, 77, 81, 98];
const spliceArray = array2.splice(2,5);    //NOTE if we splice an array by their index and how much element we want to remove
//  (2 means it start form index 2 and 5 mens it removed 5 item starting from 2) we will get the result by an array in with spliced element;
console.log(spliceArray);
console.log(array2);                      //NOTE and the main array will be changed too.
console.log("splice:")
console.log( "removed item:" + " " + spliceArray);
console.log( "remaining item:" + " " + array2);

// NOTE injecting by slice:
const array3 = [14, 23, 37, 42, 56, 61, 77, 81, 98];
const spliceArrays = array3.splice(2,5, 12);     //NOTE injecting 12 after slice end value.
console.log(spliceArrays);
console.log(array3);
console.log("new injected :" + " " + array3[2]);

// NOTE join:
const array4 = [1,2,3,4];
const joined = array4.join("me");   //NOTE adding me after a element of an array.
console.log(joined);