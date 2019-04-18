//let arr = [{key: 'academy'}, undefined, true, ['brie', 'rob', [true, false], undefined], 1150];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3][2][1]);

// arr[1] = 'whatever i want';

// console.log(arr[1]);

//for (let i = 0; i < arr.length; i++){
 // console.log(arr[i]);
//}

let arr = ['wonderful', false, ['red', 'green', 'blue'], {key: 'Patches'}, 1960];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let thing of arr){
// console.log(thing);
// }



// let fitness = ['swimming', 'running', 'yoga', 'biking', 'climbing'];
// fitness.splice(2, 0, 'stretching');
// console.log(fitness);
// fitness.splice(1, 1, 'basketball');
// console.log(fitness);
// let fun = fitness.slice(2, 6,);
// console.log(fun);

// This challenge has 2 parts.  First, create an object with 5 key-value pairs.  Using a Javascript feature 
// demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
// console.log every key in your keys array.
// input: {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
// output: key1, key2, key3, key4, key5

let obj1 = {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}};
console.log(obj1.keys);