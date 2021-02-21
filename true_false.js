//NOTE true false check:
//1.  NOTE if the value of age is getter then 0, java script will declared it to true.
const age1 = 1;
if(age1){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}


// 2. NOTE if the value of age is less then 0, java script will declared it to false.
const age2 = 0;
if(age2){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}

// NOTE the result will be same for string:
//NOTE true false check:
//1.  NOTE if the value of age is "filled string / white space", java script will declared it to true.
const name1 = "moin";
if(name1){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}


// 2. NOTE if the value of age is "empty string", java script will declared it to false.
const name2 = "";
if(name2){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}
// NOTE string with white space(' '), "0", 1, [](array without property), {}(object without property), value = true are truthy in java script.
// NOTE remember 0, ""(empty string), undefined, null, NaN, value = false is falsy in java script.
// let number = NaN;
// let number = null;
let number = undefined;
if(number){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}