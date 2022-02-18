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

var lowerCaseLetter = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseLetter= ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numeric= ['1', '2', '3', '4', '5', '6', '7', '8', '9','0']
var specialCharacter= ['#', '%', '@', '!', '$','^', '*', '&']
// empty array and password string
var array=[]   
var password = "" 
 
function generatePassword () {
  var length =  parseInt(prompt("How many characters would you like your password to contain?"));
if (length < 8 || length > 128) {
  alert("The length should between 8 and 128");
  return null;
  
}
if (Number.isNaN(length) ) {
  alert("The length should between 8 and 128");
  return null;

}

// asking what type of character you desire
var hasLowerCase = confirm("Click OK to confirm lowercase letter");
  // if yes add to our empty array
if (hasLowerCase) { 
    array = array.concat(lowerCaseLetter)
  }
console.log(array)
var hasUpperCase = confirm("Click OK to confirm uppercase letter");
// if yes add to our empty array
if (hasUpperCase) { 
  array = array.concat(upperCaseLetter)
}
console.log(array)
var hasNumeric = confirm("Click OK to confirm numeric letter");
// if yes add to our empty array
if (hasNumeric) { 
  array = array.concat(numeric)
}
console.log(array)
var hasSpecialCase = confirm("Click OK to confirm special characters letter");
// if yes add to our empty array
if (hasSpecialCase) { 
  array = array.concat(specialCharacter)
}
console.log(array)
// if no choice selected no password generate
if (hasLowerCase === false && hasUpperCase === false && hasNumeric === false && hasSpecialCase === false){
alert("Must select one type of character");
return null;
}
else{
  // for loop >> selecting number
 for (var i = 0; i < length ; i++) {
  var random = Math.floor(Math.random() * array.length);
  console.log(array.length)
  password = password + array[random];
  console.log(password)
}

return password
}

}


  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //the function generate password is being called//
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



