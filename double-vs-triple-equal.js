const first = 3;
const second = "3";
if (first == second) {        // 1. NOTE double == equal only check the value of an variable.
    console.log("there value is same.")
}
else if (first === second) {  // 2. NOTE triple === equal check both value and type of the variable.
    console.log("there type isn't same.")
}

// NOTE in java script {(0 == false) = true & (1 == true) = true} cause their covered value is same.
const first = 0;
const second = false;
if (first == second) {
    console.log("there value is same.")
}
else {
    console.log("there type isn't same.")
}

const first = 1;
const second = true;
if (first == second) {
    console.log("there value is same.")
}
else {
    console.log("there type isn't same.")
}
// NOTE but {(0 === false) = false & (1 === true) = false} cause they are not same type.
const first = 1;
const second = true;
if (first === second) {
    console.log("there value is same.")
}
else {
    console.log("there type isn't same.")
}

const first = 0;
const second = false;
if (first === second) {
    console.log("there value is same.")
}
else {
    console.log("there type isn't same.")
}