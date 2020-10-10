// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {


    // user inputs character between 8 and 128.  if it's lower than 8 or higher than 128 we need to do it again.
    let validPassword = false;
    let passwordLengthPrompt = 0;
    while (!validPassword) {
        passwordLengthPrompt = parseInt(prompt("Enter new password length (8-128 characters only"));
        if (passwordLengthPrompt > 7 && passwordLengthPrompt < 129) {
            validPassword = true;
        }
    }

    let validCharacterTypeSelected = false;
    let lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt = false;
    while (!validCharacterTypeSelected) {

        // need error handling to ensure at least one of these returns true
        lowerCasePrompt = confirm("Include lower case characters in new password? (NOTE: at lease one character type must be selected.)");
        upperCasePrompt = confirm("Include upper case characters in new password? (NOTE: at lease one character type must be selected.)");
        numericPrompt = confirm("Include numeric characters in new password? (NOTE: at lease one character type must be selected.)");
        specialPrompt = confirm("Include special characters in new password? (NOTE: at lease one character type must be selected.)");
        console.log('value of lowerCasePrompt: ' + lowerCasePrompt);
        console.log('value of upperCasePrompt: ' + upperCasePrompt);
        console.log('value of numericPrompt: ' + numericPrompt);
        console.log('value of specialPrompt: ' + specialPrompt);

        if (lowerCasePrompt || upperCasePrompt || numericPrompt || specialPrompt) {
            console.log('good job, at least one of the special character prompts came back true!');
            validCharacterTypeSelected = true;
        } else {
            alert("I'm sorry, but you must choose at least ONE character type for a secure password.  Please try again!")
        }

    }


    // creating array of letters and special characters so i can easily randomly choose from them.  numeric doesn't need an array, and for the
    // uppercase characters i will just use alphabet[xx].toUpperCase().

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let specialCharacters = ['!', '"', '#', '$', '%', '&', '`', '(', ')', '*', '+', ',', '~', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '-']

    // let's build an array of which character types they want
    console.log('value of lowerCasePrompt: ' + lowerCasePrompt);
    console.log('value of upperCasePrompt: ' + upperCasePrompt);
    console.log('value of numericPrompt: ' + numericPrompt);
    console.log('value of specialPrompt: ' + specialPrompt);
    let specialCharactersArray = [];

    // eek let's refactor this this is ugly
    if (lowerCasePrompt) {
        specialCharactersArray.push('lowerCasePrompt');
    }
    if (upperCasePrompt) {
        specialCharactersArray.push('upperCasePrompt');
    }
    if (numericPrompt) {
        specialCharactersArray.push('numericPrompt');
    }
    if (specialPrompt) {
        specialCharactersArray.push('specialPrompt');
    }

    for (let index = 0; index < specialCharactersArray.length; index++) {
        console.log('contents of specialCharactersArray at positon #' + index + ": " + specialCharactersArray[index]);


    }


    // will run a for loop for as long as the password length entered was
    let builtPassword = '';
    let tempChar = '';
    console.log('value of passwordLengthPrompt: ' + passwordLengthPrompt);
    for (let i = 0; i < passwordLengthPrompt + 1; i++) {

        // now we're going to construct this password one character at a time with this loop
        // depending on which character types were selected we'll use those as the password's characters

        let characterType = specialCharactersArray[Math.floor(Math.random() * (specialCharactersArray.length))];
        console.log('the value of characterType:' + characterType);

        switch (characterType) {
            case 'lowerCasePrompt':
                builtPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
                break;
            case 'upperCasePrompt':
                tempChar = alphabet[Math.floor(Math.random() * alphabet.length)];
                builtPassword += tempChar.toUpperCase();
                break;
            case 'numericPrompt':
                builtPassword += Math.floor(Math.random() * 10);
                break;
            case 'specialPrompt':
                builtPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                break;

        }


    }
    console.log('the final value of builtPassword: ' + builtPassword);
    return builtPassword;




}
