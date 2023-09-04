//Password Generator


// Step 1: Clicking the button generates new password.

// Step 2: creating prompts for password criteria.

// Step 3: Create prompt for length of the password at least 8 charecters and no more the 128(prompt)

// Step 4: ask for charecter types to include in the password; lowercase, uppercase, numeric, and/or special charecters.(prompt)

// Step 5: The Input should be validated and atr least one charecter type should be selected.

//Step 6: Once all prompts are answered then a password should be generated.

//step 7: password should be displayed in alert or written on web page 



// Assignment code here

var passwordText; 

function generatePassword() {

    while (true) {
        passwordLength = prompt("Please enter desire password length between (8 and 128 characters");
        if (passwordLength === null){
            alert("Password generation canceled");
            break; //Exits the loop
        }

        passwordLength = parseInt(passwordLength);
        // Checks to see if number is valid within the specified range
        //  the (!) means if the statement condition is false it will run
        if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128 ){
            break; // Exit the loop if the input is valid
        }else {
            alert("Invalid input. Please enter a valid number between 8 and 128");
        }

        if (passwordLength !== null) {
            alert("Chose a password length of" + passwordLength + "characters.")
        }
        
    }
   
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);