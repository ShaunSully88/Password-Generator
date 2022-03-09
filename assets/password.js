// Assignment code here
var numbers='0123456789';
var alphaLower='abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols= '!@#$%^&*_+-=';



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function () {
  window.alert("Please select password criteria when prompted."); 
    
  var promptLength= window.prompt("Please choose length of password. Must be between 8 and 128 characters");
  console.log("promptLength", promptLength);
        
  if (promptLength >=8 && promptLength <=128) {
    window.alert("You chose " + promptLength + " characters");
        
    confirmPasswordSpecs();


  }
  else {
    window.alert ("Invalid Entry, please try again");
    generateBtn.onclick();
    
  }
  
}

function confirmPasswordSpecs() {
  var promptLower=window.confirm("Please choose whether or not you would like lowercase letters in your password.");
    console.log("promptLower", promptLower);

    var promptUpper=window.confirm("Please choose whether or not you would like uppercase letters in your password.");
    console.log("promptUpper", promptUpper);

    var promptNumber=window.confirm("Please choose whether or not you would like numbers in your password.");
    console.log("promptNumber", promptNumber);

    var promptSymbol=window.confirm("Please choose whether or not you would like symbols in your password.");
    console.log("promptSymbol", promptSymbol);

}
 
//console.log = (promptUpper.alphaUpper + promptLower.alphaLower + promptNumber.numbers + promptSymbol.symbols);
//for (var i=0; i < promptLength; i++)  {

//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


