/*
FOR OF LOOPS
*/

//FOR OF REQUIRES that your 'thing' you're looping through be iterable--that means it needs to be numbered
//Grabs the VALUE of the 'thing', not the number or the order of the 'thing'

//let student = {name: 'Peter', isAwesome: true, degree: 'JavaScript', week: 1};
//for (item of student){
//    console.log(item);
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}
