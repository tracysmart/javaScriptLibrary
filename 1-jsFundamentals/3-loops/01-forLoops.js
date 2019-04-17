/*
LOOPS

3-loops
    01-forLoops
    */

/*
Loops offer a quick and easy way to do something repeatedly. 
There are many different kinds of loops but they all do roughly the same thing:
For statement
do while
while 
labeled
break
continue
for in
for of
*for Each
.map
*/

//Loop structure: a) creation of an indexing variable B) a run condition c) change to the indexing variable

//Count to 10 from 0 and log the numbers:
for(let i =0; i <= 10; i++){
    console.log(i);
}

//Loops can run infinitely.
For (let i = 0; i++){
    console.log(i);
    //console.log(i)
}

//counts to -25 by -3, starting from 2, logs the numbers
for(let i = 2; i >= -25; i = i - 3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = 1+ increment){
    console.log(i);
}