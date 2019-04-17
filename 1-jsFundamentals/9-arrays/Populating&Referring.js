/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys: 0, 1, 2, etc.
// console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
// console.log(students instanceof Array); //instanceof tells me my array is an array
//console.log(students[2]);
//console.log(students[1]);
//console.log(students[6]);

//let name = students[6][1];
//console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop -> gives the values of the array
let food = ['pecan pie', 'shrimp','quesadilla', 'cheesecake', 'hotdog'];

for (f of food){
    console.log(f+ ' is amazing!');
}

//array methods (see mdn docs--mozilla documentation network)

//food.push('Pizza'); //adds item to the end of an array
//console.log(food);

//food.splice(1, 1, 'Bananas');
//console.log(food);
//food.splice(2, 0, 'Sweet Potato Pie'); //asks for insertion point, # of things to remove, and the item to add
//console.log(food);

//food.pop(); //removes the last element of an array
//console.log(food);

//food = food.slice(2,5); //the first number is the first element to slice from the array, the second number is the stop position, not to be included
//console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

//food.forEach((f) => console.log(f));

//food.forEach((food, index) => {
    //console.log(`The ${food} food in our array is at position ${index}`);
//})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(movie => console.log(movie));

console.log(movies.length);

//Let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array)

let arr = new Array(1,2,3,4,5);
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

//think about: how can I represent my data as an array?
//then how can I use an array method to handle that array that stores the data?

//forEach  will loop through the elements of an array. when we use forEach, we take a callback function, where the first argument is an element of the array and the second element (did he mean argument??) is the number of that element (the index). we use ${whatever} to callback that data.