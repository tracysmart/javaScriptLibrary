class User {
  constructor(name){
    this.name = name;
    this.type = "Trial User"
  }
//Method 1
greet(){
  console.log('Welcome back,' + this.name);
}
//Method 2
status(){
  console.log('Current status: ' + this.type);
  }
}

//Extends
class TrialUser extends User {
  trialEnding(){
    console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
  }
}

//Instance of User Class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
  cheater(){
    console.log('You have been banned for fraudulent practices, ' + this.name + ' better luck next time.');
  }
}

var bannedUser = new BannedUser("Bob");
bannedUser.greet();
bannedUser.cheater();
bannedUser.status();
