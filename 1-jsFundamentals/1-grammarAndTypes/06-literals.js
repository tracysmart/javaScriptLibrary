/*
LITERALS

1-gramnmarAndTypes
06-literals.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//
console.log(weekDays.toString());
console.log(weekDays [3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

//array and object literals acan hold primitive and 'complex' types

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[0]);

let complexObjLiteral = {num:1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr[2]);