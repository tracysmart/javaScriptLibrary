function func1(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + num2);
    }
    else {
        console.log(num1 - num2);
    }
}

func1(7, 28);


for (let i = 3; i < 14; i++){
    console.log(i);
}

var grubPlace = {
    name: "Burger Vault", 
    cost: 4.99,
    pattiesNum: 3,
    condiments: [{name: "ketchup",cost: .50}, {name: "pickles", cost: .25}],
};

console.log(grubPlace);


function dump_props(obj, obj_name) {
    var result = '';
    for (var i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
  }

var x = prompt("Guess a number between 1 and 10.");

for (let i >= 1; i < 11) {
  return i * (Math.random * Math.floor);
}
	if (x === i) {
    alert("good work!");
  } 
    else {
      alert("Not matched.");
}
