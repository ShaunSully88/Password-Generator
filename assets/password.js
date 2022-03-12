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
var createPassword = "";
var poolBuild = "";



var generateBtn = document.querySelector("#generate");
var generatePassword = function () {
  
   pwlength = window.prompt ("Please choose a number between 8 and 128.");
  
  var lengthPass = parseInt(pwlength);
  if(pwlength >=8 && pwlength <=128) {
    window.alert("Your password will be " + pwlength + " characters long.");
    console.log("Your password will be " + pwlength + " characters long.")
      
     wantsLowercase = window.confirm("Would you like lowercase letters in your password? Click OK for Yes, click Cancel for No");
     console.log("alphaLower", wantsLowercase);
 
    wantsUppercase = window.confirm ("Would you like uppercase letters in your password? Click OK for Yes, click Cancel for No");
     console.log("alphaUpper", wantsUppercase)

    wantsNumeric = window.confirm ("Would you like Numbers in your password? Click OK for Yes, click Cancel for No");
    console.log("numeric", wantsNumeric);
 
    wantsSymbol = window.confirm ("Would you like Symbols in your password? Click OK for Yes, click Cancel for No");
    console.log("symbol", wantsSymbol);

    

  }  else {
      window.alert ("Invalid Entry, please try again");
      generatePassword();
  }

  if(wantsLowercase) {
    createPassword += alphaLower;
    console.log(createPassword);
  }
  if(wantsUppercase) {
    createPassword += alphaUpper;
    console.log(createPassword);
  }  
  if(wantsNumeric) {
    createPassword += numeric;
    console.log(createPassword);
  }
  if(wantsSymbol) {
    createPassword += symbol;
    console.log(createPassword);
  } 

  for (var i = 0; i < lengthPass; i++) {
   poolBuild += createPassword [Math.floor(Math.random() * createPassword.length)];
  }
  return poolBuild;

};

 
  
  




 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

