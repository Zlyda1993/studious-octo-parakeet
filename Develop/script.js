// Assignment Code
var generateBtn = document.querySelector("#generate");  //already here to start with
var characters = [8 - 128];
var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]


// Write password to the #password input
function writePassword() {                                    //already here to start with
  var password = generatePassword();                          //already here to start with
  var passwordText = document.querySelector("#password");     //already here to start with

  passwordText.value = password;                              //already here to start with

  var choice = ("true");

  characters.alert("How many characters?");
  window.prompt("Do you want to include upper-case letters?");
  window.prompt("Do you want to include lower-case letters?");
  window.prompt("Do you want to include special characters?");
  window.prompt("Do you want to include numbers?");

  var uCase2 = Math.floor(Math.random() * uCase.length);
  var choice1 = uCase[index];

  var lCase2 = Math.floor(Math.random() * lCase.length);
  var choice2 = lCase[index];

  var numbers2 = Math.floor(Math.random() * numbers.length);
  var choice3 = numbers[index];

  var special2 = Math.floor(Math.random() * special.length);
  var choice4 = special[index];

  if (characters => 8 && <= 128) {
      
  }

  if (uCase === true) {
    
  }

  if (lCase === true) {
    
  }

  if (numbers === true) {
    
  }

  if (special === true) {
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


