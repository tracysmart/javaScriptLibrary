//We name the class
class User {
  //we call the constructor function and create parameters.
  //these will be values that we want to be passed in and stored in the object.
  constructor(first, last, e) {
    //on the right side of these expressions, the word 'first', 'last', and 'e' below,
    //we have the value that is getting passed into the parens when the object is created.
    //vvv
    this.f = first;
    this.l = last;
    this.email = e;
    //^^^^^^^
    //on the right side we have the actual properties of the object.
    //the left side stores the incoming value from the right side as
    //the property for 'this' specific object being created.
  }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

class Player {
  constructor(name, number, points) {
    this.n = name;
    this.num = number;
    this.avg = points;
  }
}

var playerOne = new Player("Colin", 34, 20);
  console.log(playerOne.n);
  console.log(playerOne.num);
  console.log(playerOne.avg);

var playerTwo = new Player("Pat", 64, 10);
  console.log(playerTwo.n);
  console.log(playerTwo.num);
  console.log(playerTwo.avg);

  var playerThree = new Player("Marisol", 5, 30);
    console.log(playerThree.n);
    console.log(playerThree.num);
    console.log(playerThree.avg);

    class Animal {
      constructor(species, color, sex) {
      this.kind = species;
      this.shade = color;
      this.gender = sex;
    }
  }

    var petOne = new Animal("cat", "tortoise", "female");
      console.log(petOne.kind);
      console.log(petOne.shade);
      console.log(petOne.gender);

      class Car {
        constructor (make, year, model){
        this.vehicle = make;
        this.date = year;
        this.name = model;
        }
      }

      var rideOne = new Car("Ford", 2013, "Taurus");
      console.log(rideOne.vehicle);
      console.log(rideOne.date);
      console.log(rideOne.name);

      class House {
        constructor(color, material, bedrooms){
        this.shade = color;
        this.kind = material;
        this.size = bedrooms;
      }
  }

  var myHouse = new House("tan", "limestone", 4);
  console.log(myHouse.shade);
  console.log(myHouse.kind);
  console.log(myHouse.size);
  