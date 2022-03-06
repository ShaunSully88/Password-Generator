// Assignment code here


   

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function () {
    window.alert("Please select password criteria when prompted."); 



 var promptLength= window.prompt("Please choose length of password. Must be between 8 and 128 characters");
 console.log;

 var promptType = window.prompt("Please select the Character Types you would like in your password: Lowercase, Uppercase, numeric, sepcial characters.");
 console.log;   
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

