//Password Generator


// Step 1: Clicking the button generates new password.

// Step 2: creating prompts for password criteria.

// Step 3: Create prompt for length of the password at least 8 charecters and no more the 128(prompt)

// Step 4: ask for charecter types to include in the password; lowercase, uppercase, numeric, and/or special charecters.(prompt)

// Step 5: The Input should be validated and atr least one charecter type should be selected.

//Step 6: Once all prompts are answered then a password should be generated.

//step 7: password should be displayed in alert or written on web page 



// Assignment code here

document.getElementById("generate").addEventListener("click", function () {
    const length = prompt("Enter password length (between 8 and 128 characters):");
    if ( !length || isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length.");
      return;
    }

    const includeLowerCase = confirm("Include lowercase characters?");
    const includeUpperCase = confirm("Include uppercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
      alert("You must select at least one character type.");
      return;
    }
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/[]{}";


    
    let availableChars = "";

    if (includeLowerCase) {
      availableChars += lowercaseChars;
    }
    if (includeUpperCase) {
      availableChars += uppercaseChars;
    }
    if (includeNumeric) {
      availableChars += numericChars;
    }
    if (includeSpecial) {
      availableChars += specialChars;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }

    document.getElementById("password").value = password;
  });