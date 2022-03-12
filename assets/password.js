// Assignment code here
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbol = "!@#$%^&*+-";
var pwlength;
var wantsLowercase;
var wantsUppercase;
var wantsNumeric;
var wantsSymbol;
var buildPassword = "";
var poolBuild = "";
var createPassword;

var generateBtn = document.querySelector("#generate");
var generatePassword = function () {
  
   pwlength = window.prompt ("Please choose a number between 8 and 128.");
  
  if(pwlength >=8 && pwlength <=128) {
    window.alert("Your password will be " + pwlength + " characters long.");
    console.log("Your password will be " + pwlength + " characters long.")
      
     wantsLowercase = window.confirm("Would you like lowercase letters in your password? Click OK for Yes, click Cancel for No");
     console.log("alphaLower", wantsLowercase);
 
    wantsUppercase = window.confirm ("Would you like uppercase letters in your password? Click OK for Yes, click Cancel for No");
     console.log("alphaUpper", wantsUppercase)

    wantsNumeric = window.confirm ("Would you like Numbers in your password? Click OK for Yes, click Cancel for No");
    console.log("Numeric", wantsNumeric);
 
    wantsSymbol = window.confirm ("Would you like Symbols in your password? Click OK for Yes, click Cancel for No");
    console.log("symbol", wantsSymbol);

  }  else {
      window.alert ("Invalid Entry, please try again");
      generatePassword();
}
};

createPassword = "";
  for(var i = 0; i < pwlength;) {
    poolBuild[pwlength]  

    if(wantsLowercase === true && wantsLowercase <= pwlength) {
      buildPassword += alphaLower[Math.floor(Math.random() * (alphaLower.length - 1))]
    }
    if(wantsUppercase === true && wantsUppercase <= pwlength) {
      buildPassword += alpaUpper[Math.floor(Math.random () * (alphaUpper - 1))]
    }  
    if(wantsNumeric === true && wantsNumeric <= pwlength) {
      buildPassword += numeric[Math.floor(Math.random () * (numeric -1))]
    }
    if(wantsSymbol === true && wantsSymbol <= pwlength) {
      buildPassword += symbol[Math.floor(Math.random () * (symbol -1))]
    }  
  }
  




 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

