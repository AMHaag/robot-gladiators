var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;


var enemyName = "Evilbot";
var enemyHealth = 50;
var enemyAttack = 12;



var robotStatus = function(){
    console.log(playerName, playerHealth, playerAttack);
    console.log(enemyName, enemyHealth, enemyAttack); 
}

robotStatus();

var fight = function (){
    //alert players round is about to begin
    window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    enemyHealth = enemyHealth - playerAttack

  // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + " for " + playerAttack + " damage!");
    console.log(enemyName + " now has " + enemyHealth + " HP remaining");

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + "attacked" + playerName + " for " + enemyAttack + " damage!");
    console.log(playerName + " has " + playerHealth + "HP left!")

  // Log a resulting message to the console so we know that it worked.
    console.log("End of Round")
    robotStatus();

};

fight();





