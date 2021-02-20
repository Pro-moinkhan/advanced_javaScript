// NOTE getting undefined:
// 1. NOTE variable without value is undefined.
let pet;
console.log(pet);
// 2. NOTE function with out return is undefined.
function add(number1, number2) {
    console.log(number1 + number2);
}
const result = add(12, 11);
console.log(result);
// 3. NOTE function with out return value is undefined.
function add(number1, number2) {
    console.log(number1 + number2);
    return
}
const result = add(12, 11);
console.log(result);
// 4. NOTE don't passing parameter properly is undefined.
function add(number1, number2) {
    return number1 , number2;
}
const result = add(12);
console.log(result);
// 5. NOTE calling a property of an object which Property  don't present in this object. is undefined.
const object = {
    name: 'Moin Khan',
}
console.log(object.gf);
// 6. NOTE when We defines a variable to undefined is undefined.
let definedVariable = undefined;
console.log(definedVariable);
// 7. NOTE when we call a  property of an array which property don't present isn this array. is undefined.
const array = [2, 4, 6];
console.log(array[22]);


// NOTE when we explicitly defines a variable to null (it means the value is empty) is null.
const numbers = null;
console.log(numbers);