function pacersWon() {
    console.log("Pacers won!");
}

    pacersWon();
    pacersWon();

    function numberEntered(x){
    console.log("The number entered was" , x);
    }
    numberEntered(5);
    numberEntered(4);
    numberEntered(3);

    function addAnyTwoNumbers(x, y){
        console.log(x + y);
    }
    addAnyTwoNumbers(3,9);
    addAnyTwoNumbers(6,2);
    addAnyTwoNumbers(7,85);

    function subtractTwoNumbers(x, y){
    console.log(x-y);
    }
    subtractTwoNumbers(9, 6);
    subtractTwoNumbers(76,94);
    subtractTwoNumbers(3,1);

    function subtractTwoNumbers(firstNum, secondNum){
        console.log(secondNum - firstNum);
    }

    subtractTwoNumbers(5,7);

    function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
        let myInc = a * x;
        let myTaxes = myInc - y;
        let total = myTaxes + z;
        return total; 
    }

    getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

    function add(x, y){
        let sum = x + y;
        console.log(sum);
        return sum;
    }
add(1,1);

function fullName(first, last){
    let person = first + " " + last;
    console.log(person);
    return person;
}

fullName("Bob", "Groves");


function myCat(name, breed){
var pet = name + " " + breed;
console.log(pet);
return pet;
}

myCat("Patches", "tortoise shell");

function subtract2Numbers (firstNum, secondNum){
    console.log(secondNum - firstNum);
}
subtract2Numbers (8,3);

function prospect(First, Last){
    var wholeName = First + " " + Last; 
    console.log(wholeName);
    return wholeName;
}
prospect('Jennifer', 'Blaine');

function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);