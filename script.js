// Assignment Code
var generateBtn = document.querySelector("#generate");  //already here to start with
var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  var finalPassword = "";

  var characters = prompt("How many characters?");
  // alert(characters);
  characters = parseInt(characters);
  if (characters >= 8 && characters <= 128) {
    var checkUpper = confirm("Do you want to include upper-case letters?");
    var checkLower = confirm("Do you want to include lower-case letters?");
    var checkNumbers = confirm("Do you want to include numbers?");
    var checkSpecial = confirm("Do you want to include special characters?");
    if(checkUpper === false && checkLower === false && checkNumbers === false && checkSpecial === false) {
      alert("You must chose at least one type of character.")
      return;
    }
    for (let i = 0; i < characters; i++) {

      if (checkUpper === true && finalPassword.length < characters) {
        var index = Math.floor(Math.random() * uCase.length);
        var choice1 = uCase[index];
        finalPassword = finalPassword + choice1;
      }

      if (checkLower === true  && finalPassword.length < characters) {
        var index = Math.floor(Math.random() * lCase.length);
        var choice2 = lCase[index];
        finalPassword = finalPassword + choice2;
      }

      if (checkNumbers === true && finalPassword.length < characters) {
        var index = Math.floor(Math.random() * numbers.length);
        var choice3 = numbers[index];
        finalPassword = finalPassword + choice3;
      }

      if (checkSpecial === true && finalPassword.length < characters) {
        var index = Math.floor(Math.random() * special.length);
        var choice4 = special[index];
        finalPassword = finalPassword + choice4;
      }
    }
  } else {
    alert("Invalid password size, the password should be between 8 and 128 characters.");
    return;
  }
  return finalPassword

}
// Write password to the #password input
function writePassword() {                                    //already here to start with
  var password = generatePassword();                          //already here to start with
  var passwordText = document.querySelector("#password");     //already here to start with

  passwordText.value = password;                              //already here to start with
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //already here to start with
