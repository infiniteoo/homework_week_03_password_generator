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
        } else {
            alert('Sorry, you entered an invalid number. it must be between 8 and 128 characters long.  Please try again.');
        }
    }

    let validCharacterTypeSelected = false;
    let lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt = false;
    while (!validCharacterTypeSelected) {

        // need error handling to ensure at least one of these returns true
        lowerCasePrompt = confirm("Include lower case characters in new password? (NOTE: at lease one character type must be selected.");
        upperCasePrompt = confirm("Include upper case characters in new password? (NOTE: at lease one character type must be selected.");
        numericPrompt = confirm("Include numeric characters in new password? (NOTE: at lease one character type must be selected.");
        specialPrompt = confirm("Include special characters in new password? (NOTE: at lease one character type must be selected.");

        // if at least one of the rule style types were selected true we can proceed out of this loop
        if (lowerCasePrompt || upperCasePrompt || numericPrompt || specialPrompt) {
            validCharacterTypeSelected = true;
        } else {
            alert("I'm sorry, but you must choose at least ONE character type for a secure password.  Please try again!")
        }

    }



    // creating array of letters and special characters so i can easily randomly choose from them.  numeric doesn't need an array, and for the
    // uppercase characters i will just use alphabet[xx].toUpperCase().

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let specialCharacters = ['!', '"', '#', '$', '%', '&', '`', '(', ')', '*', '+', ',', '~', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '-']

    // whichever special rules they decided to add to the password (lower/upper case, numeric and special characters)
    // will be added to an array, so that we can easily, randomly pick one to cusotmize each character in the new password

    let appliedRulesArray = [];

    function addRuleToArray(ruleName) {

        appliedRulesArray.push(ruleName);

    }
    if (lowerCasePrompt) {
        addRuleToArray('lowerCasePrompt');
    }
    if (upperCasePrompt) {
        addRuleToArray('upperCasePrompt');
    }
    if (numericPrompt) {
        addRuleToArray('numericPrompt');
    }
    if (specialPrompt) {
        addRuleToArray('specialPrompt');
    }

    let builtPassword = '';
    let tempChar = '';

    // run a for loop for as long as the password length entered was
    for (let i = 0; i < passwordLengthPrompt; i++) {

        // now we're going to construct this password one character at a time with this loop
        // depending on which character types were selected we'll use those as the password's characters

        // randomly picks a rule type from the appliedRulesArray
        let characterType = appliedRulesArray[Math.floor(Math.random() * (appliedRulesArray.length))];

        // depending on which randomly chosen rule type is selected, we'll apply that rule through this switch statement. 
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

    // sends the newly constructed password back to the UI window
    return builtPassword;




}
