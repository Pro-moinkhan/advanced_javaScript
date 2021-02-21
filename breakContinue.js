// NOTE break:
const array = [1, 3, 5, 7, 9];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = [];
    if (element > 5) {
        result.push(element);
        break;  //NOTE break stop forLoop based on condition.
    }
    console.log(element);
}


// NOTE continue:
const array2 = [1, 3, 5, 7, 9];
for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    const result = [];
    if (element1 < 5) {
        result.push(element1);
        continue;   //NOTE continue will Disobedience the condition.
    }
    console.log(element1);
}