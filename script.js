// Assignment code here

// Create variables for user input and character types
var userInput = [];
var characterLength = 8;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Prompts answered will result as either true or false
  var correctPrompts = prompts();
  var passwordText = document.querySelector("#password");
  // Conditional statement for prompts answered as true will display written password to the page
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add and define function generatePassword based on series of prompts for password criteria
function generatePassword() {
  // Will log statement in console to confirm button is clicked and working
  console.log("You clicked the button!");
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * userInput.length);
    password = password + userInput[randomIndex];
  }
  return password;
}

// Prompt the user for the password criteria
// Password length of 8-128 characters
// Add parseInt method to convert value of string as an integer 
// NaN if value of user input is not an integer
function prompts() {
  userInput = [];
  characterLength = parseInt(prompt("How many characters do you want your password to contain? (8 - 128 characters)")); 

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number. Password should contain at least 8 to no more than 128 characters.");
    return false;
  }
  // Prompts to ask user to confirm character types to be included in password
  if (confirm("Click OK to confirm including lowercase characters.")) {
    userInput = userInput.concat(lowerCase);
  }
  if (confirm("Click OK to confirm including uppercase characters.")) {
    userInput = userInput.concat(upperCase);
  }
  if (confirm("Click OK to confirm including numeric characters.")) {
    userInput = userInput.concat(number);
  }
  if (confirm("Click OK to confirm including special characters.")) {
    userInput = userInput.concat(specialChar);
  }
  return true;
}