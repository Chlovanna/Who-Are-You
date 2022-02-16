//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment code here

var lowerCaseLetter = ['a', 'b', 'c']
var upperCaseLetter= ['A', 'B', 'C']
var numeric= ['1', '2', '3']
var specialCharacter= ['#', '%', '@']
    
 
 
function passwordCriteria () {
  var length =  parseInt(prompt("How many characters would you like your password to contain?"));
if (length < 8 || length > 128) {
  alert("The length should between 8 and 128");
  return null;
  
}
if (Number.isNaN(length) ) {
  alert("The length should between 8 and 128");
  return null;
 
  

}
var hasLowerCase = confirm("Click OK to confirm lowercase letter");
var hasUpperCase = confirm("Click OK to confirm uppercase letter");
var hasNumeric = confirm("Click OK to confirm numeric letter");
var hasSpecialCase = confirm("Click OK to confirm special characters letter");
if (hasLowerCase === false && hasUpperCase === false && hasNumeric === false && hasSpecialCase === false){
alert("Must select one type of character");
return null;
}

var userInput = {
  length: length, 
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumeric: hasNumeric,
  hasSpecialCase: hasSpecialCase

}
return userInput;


}



  function generatePassword () {
    var userOptions = passwordCriteria ();
  }

  if (userOptions)
    




    
  
    

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//the function generate password is being called//
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



