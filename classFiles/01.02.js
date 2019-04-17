//arrays
let newArr = ['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbered elements.  the numbers are index-es and the values
//are the elements
console.log(newArr[3].pickles);
// console.log(newArr[3]);
newArr[3].pickles = true;
console.log(newArr[3]);
// newArr[3] = 'Alecx is one bad dude with styling';

//conditionals
let isRainy = false;
let isWarm = false;

if (isRainy == true){
  console.log('bring your umbrella');
} else {
  console.log('leave the umbrella at home');
}

if (isWarm){
  console.log('wear shorts');
} else {
  console.log('wear a parka');
}

let gpas = [1.9, 3.5, '4.0', 2.8];
let singleGpa = gpas[2]; //4.0

if (singleGpa === 4.0){
  console.log('wow!  that is amazing!');
} else {
  console.log('...eh, you might wanna hit the books');
}

/*
challenge1
Write an array with at least 5 different numbers stored as values in the array. Use if-elseif statements to change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).
*/

let myArr = [14, 29, 50, 72, 45];
let temp = [3];
if (temp >= 49){}

}

let Oreo = [1, 2, 3, 4, 5];
let indexNum = 2

if (indexNum == 0) {
  Oreo [0] **= 5;
}  if (indexNum == 1) {
  Oreo [1] **= 5;
}  if (indexNum == 02) {
  Oreo [2] **= 5;
}  if (indexNum == 3) {
  Oreo [3] **= 5;
}  if (indexNum == 4) {
  Oreo [4] **= 5;
}
console.log(Oreo);

/* Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.*/


let faveMovie = {
    name: 'Snow White and the Seven Dwarves',
    runTime: 85;
    characters: {
        charOne: {
            name: 'Snow White',
            age: 16
        }
        genre: 'fantasy'}
}

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        }
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure',
}

console.log(lotrObj.characters.charOne.age)


/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;
prediction = all undefined

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/

