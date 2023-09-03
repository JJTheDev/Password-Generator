//Password Generator


// Step 1: Clicking the button generates new password.

// Step 2: creating prompts for password criteria.

// Step 3: Create prompt for length of the password at least 8 charecters and no more the 128(prompt)

// Step 4: ask for charecter types to include in the password; lowercase, uppercase, numeric, and/or special charecters.(prompt)

// Step 5: The Input should be validated and atr least one charecter type should be selected.

//Step 6: Once all prompts are answered then a password should be generated.

//step 7: password should be displayed in alert or written on web page 



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);