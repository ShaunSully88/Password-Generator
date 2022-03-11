// Assignment code here

var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  
  var pwlength = window.prompt ("Please choose a number between 8 and 128.");
  

  if (pwlength >=8 && pwlength <=128) {
    window.alert("You chose " + pwlength + " characters");
    console.log("Your password will be " + pwlength + " characters long.")

     var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    window.prompt ("Would you like Lowercase letters in your password? Click OK for Yes, click Cancel for No");
    console.log("alphaLower", alphaLower);
  

    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.prompt ("Would you like Uppercase letters in your password? Click OK for Yes, click Cancel for No");
    console.log("alphaUpper", alphaUpper)
   

    var numeric = "0123456789";
    window.prompt ("Would you like Numbers in your password? Click OK for Yes, click Cancel for No");
    console.log("Numeric", numeric);
    
    var symbol = "!@#$%^&*+-";
    window.prompt ("Would you like Symbols in your password? Click OK for Yes, click Cancel for No");
    console.log("symbol", symbol);
    
  }  else {
      window.alert ("Invalid Entry, please try again");
      generatePassword();
        
    };
    
 
  
  
  
  
}


 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

