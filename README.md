# University of Minnesota Coding Boot Camp - Fall 2020 
## Assignment #03 JavaScript: Password Generator


### Overview

The focus of this assignment was to build a randomly generated password for a user based on the following criteria:

* The password would be between 8 and 128 characters in length, as decided by the user.
* The password would contain at least one of the following special character rule sets:
    * The password will contain lower case characters (a thru z)
    * The password will contain upper case characters (A thru Z)
    * The password will contain numeric characters (0 thru 9)
    * The password will contain special characters (i.e. "%", "?", "<", "!", etc.)

After picking a valid password length, the user is guided through a series of prompts determining which special character rule sets to apply.

Finally, after the length and rule sets are determined, a randomly generated password is displayed on screen for the user to copy and paste to use in other applications.

This was a really fun project, and a multitude of steps were taken to finalize this product ensuring proper execution and no errors.  Here are the steps taken to achieve this goal:

* Built initial file system structure and deployed basic blueprint to Github to begin the repository.
* Integrated supplied code from homework project and put them into their respective files: index.html, style.css, and script.js.
* Sketched out (my own) pseudo code logic from the homework assignment's and transcribed them into the code as comments.
* Constructed alphabet and special character arrays, along with the applied rules array.
* Built password validation and rule set prompts inside while loops to ensure all entries were valid and at least one rule set was designated to be applied.
* Which ever special character rule sets that the user wants to apply to the final password were added to the appliedRulesArray.
* Iterated a for-loop over the desired length of the password the user entered, to built the new password one character at a time.
* Randomly pick a rule set from the appliedRulesArray, and pick a random character from whatever resulted from the initial pick.
* Add that character to the final string "builtPassword".
* Return the final password back to the user's interface so they can copy/paste into other applications.

After multiple trial and error debugging sessions, all applied logic appears sound and no bugs can be generated from purposeful negligent entries.  From this point, it was time to clean up:

* Refactor reduntant and worthless code.
* Removed multiple, annoying console.log commands used for debugging.
* Double-checked to ensured code was properly formatted and commented before submission.
* Wrote README.MD file.
* Added screenshots to README.
 

### Installation

Installation should be fairly straightforward, but here's a quick guide to get up and running, assuming you have **Visual Studio Code** and **Git** (with the accompanying interface **Git Bash**) installed.

* from your shell input the command: `git clone https://github.com/infiniteoo/homework_week_03_password_generator.git`
* once downloaded, from the working directory in the shell input the command: `code .`


### Live Example

This project can be previewed live via Github Pages at: https://infiniteoo.github.io/homework_week_03_password_generator/

# Screenshots of Deployed Website

## 992px Width - 128 Characters With All Character Types
![screenshot 992px width: index.html](/img/992px_passwordGenerator.PNG)

## 768px Width - 10 Characters With Upper Case & Special Characters
![screenshot 768px width: index.html](/img/768px_passwordGenerator.PNG)

## 400px Width - 25 Characters With Upper Case, Numeric and Special Characters
![screenshot 400px width: index.html](/img/400px_passwordGenerator.PNG)




### License

Copyright 2020 T. Dorman, distrubuted under the **GNU Public License** for the Univeristy of Minnesota Part-Time Full Stack Coding Boot Camp.














