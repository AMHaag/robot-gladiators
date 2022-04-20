// Player character variable
  var playerName = window.prompt("What is your robot's name?");
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 10;

//Enemy variables
  var enemyName = "Evilbot";
  var enemyHealth = 50;
  var enemyAttack = 12;

// shows the current combatant stats in the console
var robotStatus = function(){
    console.log(playerName, playerHealth + " HP", playerAttack + " Atk", playerMoney + " money");
    console.log(enemyName, enemyHealth, enemyAttack); 
}

robotStatus();

var fight = function (){
  //alert players round is about to begin
  window.alert("Welcome to Robot Gladiators!");
  
  //Choose to fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  console.log(promptFight);


  //if FIGHT is chosen
  if (promptFight === "fight" || promptFight === "FIGHT"){
      // -- Player Attack --
      enemyHealth = enemyHealth - playerAttack

      //Playe Attack result log
      console.log(playerName + " attacked " + enemyName + " for " + playerAttack + " damage!");
      console.log(enemyName + " now has " + enemyHealth + " HP remaining");

        // -- Enemy Attack --
    playerHealth = playerHealth - enemyAttack;
    //Enemy Attack result log
    console.log(enemyName + " attacked " + playerName + " for " + enemyAttack + " damage!");


      // -- Death Check and alert user of combatant status
      //Enemy Check
      if (enemyHealth <= 0){
      window.alert(enemyName + " has did!")}
      else {window.alert(enemyName + " still has " + enemyHealth + " health left.")}
      //Player Check
      if (playerHealth <= 0) {
      window.alert(playerName + " has died!");} 
      else {window.alert(playerName + " still has " + playerHealth + " health left.");
  }}
  else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");
    if (confirmSkip){
    window.alert(playerName + " has chosen to skip the fight!");
    playerMoney = playerMoney -2;}
    else {fight();}
  }
  else {window.alert("Please choose a valid option and try again!")}
 




  // Log a resulting message to the console so we know that it worked.
    console.log("End of Round")
    robotStatus();

  
  

};


fight();





