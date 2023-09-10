#Password Generator

# Steps
## First: I set up my arrays with the characters i wanted the function to pull from, each depending on what type of character it was calling for. A total of four catagories.

## Second: Started set up of function generatePassword to define it.

## Third: I set the variable of finalPassword to blank or undefined so that it would be empty until the rest of the function was able to add value to it.

## Forth: Set variable characters to a prompt with the string how many characters?, so that i could have the ability to capture the input from the user and use it later in the function.

## Fifth: Created an if statement with the conditions of character being greater or equal to 8 AND less than or equal to 128 that was the range of being between 8 and 128 was met and the user could not created passwords less than 8 characters or more than 128.

## Sixth: I set up four variables each to a different confrim method. Each asking the user if they wanted that specific character as a part of their password.

## Seventh: Then i set up an if statement saying if the user clicks cancel or "false" on all of the confirm methods then the rest of the function would not run and it would alert the user that they must chose at least one of those options.

## Eigth: I placed a return after the prompt to exit the function if the user decided to chose cancel on all of the confirm methods, thus making them restart the process and allowing them to make their choice.

## Ninth: Using a for loop i was able to let the index start out being equal to one, then had the index less than the characters value and used i++ to allow the index to go up by one until it reached the quantity of what the user had typed in for the prompt.

## Tenth: Set up an if statement to check the if the upper case was selected as true and have it set the final password length to be less than the character to make sure it did not exceed what the user had typed in.

## Eleventh: I set the variable index to be equal to length of the uppercase array times the random and floor method which allows it to pull from the array and round the value of the index it calls therefor the index would line up to one of the indexs that was within the array and not be a value within two array.

## Twelth: I set the variable choice1 to the uppercase index then set the final password equal to the final password plus that choice, therefor have the final password factor in the uppercase when it is generated.

## Thirteenth: I repeated steps ten through twelve for the lowercase, numbers, and special characters to have the function factor in those arrays as well as long as they had been chosen by the user to be factored in.

## Forteenth: I created an else statement near the end of the characters if statement of checking the number of characters to alert the user to enter a valid number within the range of 8 and 128. Just incase the user chose a number under the excepted value or over it and added a return so that it would end the function if the characters statement wasnt satisfied and didn't continue to try and run the rest of the function.

## Finally I ended the original function of generate password with a return and final password to have it end the function and then generate the password to the user.

## The function write password was already given to me. It has the variable password equal to the function generate password which allows that function to call onto the generate function. It also set the password text equal to document query slector with the id of password which tells the where to put the text once it is generated within the html (where at on the page). Lastly they had the password text value equal to password to that they were connected and caused the generate password function to run.

## They also included generatebtn attached to an event listener with the parameters of click and write password. This tells the page that when the user clicks on the generate button, "first part of parameter", it will call the function write password, "second part of parameter", therefor starting the whole chain of function calling and if statements.

# Special Thanks and what i learned

## Thank you to Phillip Loy, during our tutor session, for helping me understand hwat parts of my code was heading in the write direction and where i needed to move things to get the functions and if statements working. Also for subtly hinting at what i should do and waiting on it to make since to me therefor allowing me to learn even more and understand how to navigate the functions, variables, and if else statements.

