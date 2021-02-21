// NOTE accessing particular element of an arrayObject with normal forLoop:
const students = [
    { id: 1, name: 'moin', age: 18},
    {id: 2, name: 'sakib', age:16},
    {id: 3, name: 'rifat', age: 19},
    {id: 4, name: 'nazmul', age: 17},
];
const result = [];
for(let i = 0; i < students.length; i++){
    element = students[i];
    const names = element.name;
    result.push(names);
}
console.log(result);

// NOTE accessing particular element of an arrayObject with map:
const studentsInfo = [
    { id: 1, name: 'moin', age: 18},
    {id: 2, name: 'sakib', age:16},
    {id: 3, name: 'rifat', age: 19},
    {id: 4, name: 'nazmul', age: 17},
];
const studentNames = studentsInfo.map(s => s.name);
const studentIds = studentsInfo.map(s => s.id);
console.log(studentNames, studentIds);