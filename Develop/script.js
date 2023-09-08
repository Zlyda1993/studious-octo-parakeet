// Assignment Code
var generateBtn = document.querySelector("#generate");  //already here to start with
var characters = [8 - 128];
var uCase = ["true", "false"];
var lCase = ["true", "false"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]


// Write password to the #password input
function writePassword() {                                    //already here to start with
  var password = generatePassword();                          //already here to start with
  var passwordText = document.querySelector("#password");     //already here to start with

  passwordText.value = password;                              //already here to start with

  window.alert("How many characters?");
  window.prompt("Do you want to include upper-case letters?");
  window.prompt("Do you want to include lower-case letters?");
  window.prompt("Do you want to include special characters?");
  window.prompt("Do you want to include numbers?");

  if (characters) {

  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


