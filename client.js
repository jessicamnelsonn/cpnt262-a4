// String
const myString = "Jessica is the coolest";

// Variable to add stuff to
let strSplit = myString.split(' '); // Splits the string stored in the variable myString into an array of substrings using a space
let longestWord = 0; // Initial value of 0

// Loop & Conditional
for (let i = 0; i < strSplit.length; i++) { // Initializes loop variable i to 0, loop will continue as long as i is less than the length of the strSplit array
  if (strSplit[i].length > longestWord) { // Checks whether the length of the word at the current index i is greater than the current value stored in the longestWord variable
    longestWord = strSplit[i].length; // If the new word is longer, it forgets the old longest word and remembers the new one
  } 
}

//------------------------------------------------------------------------------------------//

// String
const myOriginalString = "This is my string reversed";

// Variable to add stuff to
let reversedString = '';

// Loop
for (let i = myOriginalString.length - 1; i >= 0; i--) { // Initializes a loop variable i to the last index of the string. Loop continues as long as i is greater than or equal to 0. This means the loop will iterate through the characters of the string in reverse order
  reversedString += myOriginalString[i]; // Within the loop, it adds the character at the current index i of myOriginalString to the reversedString variable
}


