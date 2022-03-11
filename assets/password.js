// Assignment code here

var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  
  var pwlength = window.prompt ("Please choose a number between 8 and 128.");
  

  if (pwlength >=8 && pwlength <=128) {
    window.alert("You chose " + pwlength + " characters");
    console.log("Your password will be " + pwlength + " characters long.")
  }  else {
    window.alert ("Invalid Entry, please try again");
    generatePassword();
      
  };

     var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    window.prompt ("Would you like lowercase letters in your password? Click OK for Yes, click Cancel for No");
    console.log("alphaLower", alphaLower);

    if (alphaLower = true) {
       window.alert("You will have lowercase letters in your password.");
    } else {
      window.alert("You will have no lowercase letters in your password.");
    } 
  

    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.prompt ("Would you like uppercase letters in your password? Click OK for Yes, click Cancel for No");
    console.log("alphaUpper", alphaUpper)

    if (alphaUpper = true) {
      window.alert("You will have uppercase letters in your password.");
    } else {
      window.alert("You will have no uppercase letters in your password.");
    }
   

    var numeric = "0123456789";
    window.prompt ("Would you like Numbers in your password? Click OK for Yes, click Cancel for No");
    console.log("Numeric", numeric);

    if (numeric = true) {
      window.alert("You will have numbers in your password");
    } else {
      window.alert("You will have no numbers in your password.");
    }
    
    var symbol = "!@#$%^&*+-";
    window.prompt ("Would you like Symbols in your password? Click OK for Yes, click Cancel for No");
    console.log("symbol", symbol);

    if (symbol = true)  {
      window.alert("You will have symbols in your password.");
    } else {
      window.alert("You will have no symbols in your password.");
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

