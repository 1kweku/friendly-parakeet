// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generatePassword function defined
function generatePassword() {
  var userInput = window.prompt ("Please pick a password length between 8 and 128 characters")

  if (userInput < 8 || userInput > 128) {
    window.alert("Password length must be between 8 and 128.")
    return
  }

  var userNumbers = window.confirm('Do you want numbers in your password?')

}

if 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
