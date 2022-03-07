// Assignment code here
const numbers="0123456789";
const alpha = "abcdefghijklmnopqrstuvwxyz";
const symbols= "!@#$%^&*_+-=";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function () {
    window.alert("Please select password criteria when prompted."); 
    
    var promptLength= window.prompt("Please choose length of password. Must be between 8 and 128 characters");
        
      if (promptLength >=8 && promptLength <=128) {
        window.alert("You chose " + number + " characters")
      }
      else {
        window.alert ("Invalid Entry, please try again")
        Length();
      }
    

 var promptType = window.prompt("Please select the Character Types you would like in your password: Lowercase, Uppercase, numeric, symbols.");
      promptType= parseInt(promptType);
      switch (promptType) {
       
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Used code that might still be good
