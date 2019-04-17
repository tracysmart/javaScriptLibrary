let newArr = ['holly', 1150, true, undefined, null, [1,2,3], {key: 'Zach', key2: 'Brie'}];
let newObj = {str: 'holly', num: 1150, bool: true, undef: undefined, nu: null, arr: [1,2,3], obj: {key: 'Zach', key2: 'Brie'}};

console.log(newArr[0], newArr[1], newArr[2], newArr[3], newArr[4], newArr[5], newArr[6]);
console.log(newObj.str, newObj.num, newObj.bool, newObj.undef, newObj.nu, newObj.arr, newObj.obj);

//Scope Practice//
const first = 'firstName';
let second = 'middleName';
var third = 'lastName';
//var = gets hoisted to here, but not the value
function play(){
  const first = 'a'; 
  console.log(first, second, third);//a, middle name, undefined
  if (5 > 4){
    const first = 1; //doesn't hoist, not avail.
    let second = 2;//stays here so not avail. at top of function
    var third = 3;//goes to top, but not its value-> undefined
    console.log(first, second, third);// 1,2, 3
  }
  console.log(first, second, third);// a, middleName, 3
}

play();
console.log(first, second, third); //firstName, middleName, lastName
//1) 