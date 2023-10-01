// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' with a string value of 'Dane'.
// We check if the name is 'Mary', in which case the console will log 'Hi, Mary!'; 
// otherwise, if the value of name is anything other than 'Mary', the console will log 'How do you do?'
// Since name = 'Dane', we should see 'How do you do?' as the value if we console log 'name'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret'.
// we create another variable called 'code' with a value of the number 123.
// We make a conditional 'if' statement: if the value of code is exactly 123, the value of the variable 'secret' will be a string, 'super'.
// If 'code' is 123 it will also multiply itself by 2.
// If the variable 'code' is greater than 250, the value of variable 'secret' will be a string, 'duper'.
// Then we console log 'secret', with a value of 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable 'isStudent' with a Boolean value of 'true'.
// We create another variable 'age' with a value of 34.
// We create a third variable 'zip' with a value of 55407.
// We make a conditional 'if' statement: if the value of 'isStudent' is true AND the value of zip is greater than 8000, the console will log "You're a student on the West Coast!"
// Or, if the value of 'isStudent' is false OR the value of age is less than 30, the console will log "What are your hobbies?"
// Or, if the value of 'isStudent' is true and the zip is less than or equal to 8000, the console will log "Welcome to Prime!"
// Otherwise, the console will log "How about the weather?"
// Since isStudent = true but zip is less than 8000, and the age is greater than 30, neither of the first two conditions will be satisfied and we will go to the third condition.
// The console will log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne = 'red' and colorTwo = 'blue', but the instructions say the reverse. Should be let colorOne = 'blue'; let colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - the instructions say to set colorOne AND colorTwo to 'purple', but only colorOne is set to 'purple'.
// Should have an additional 'colorTwo = 'purple';' below 'colorOne = 'purple';'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - Time is set as a constant but it should be a variable; instead of const time = 4 it should be let time = 4.
// The double bars || mean or, not and. It should be && instead. if (temp > 39 && time >= 4)...
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX - if we want minAge to be a variable, and not a constant, it should be let minAge = 21.
/*
let age = 21;
const minAge = 21;

// FIX - this is checking if minAge is less than or equal to age; we want to check if age is >= minAge. Should be if(age >= minAge)...
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

