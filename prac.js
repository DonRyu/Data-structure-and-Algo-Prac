// Using the JavaScript language, have the function PalindromeCreator(str) take the str parameter being passed and
// determine if it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters.
// For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome.
// For this example your program should return the two characters that were removed with no delimiter and in the order
// they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the
// string not possible. If the input string is already a palindrome, your program should return the string palindrome.

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest
// palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters
// you remove do not have to be adjacent in the string.

// Hint: Try looping through the string and removing every character to see if it produces a palindrome. Then you
// can also try and remove different pairs of letters within the string as well.

// at least len 3
// remove more than 2 => not possible
// abjchba => js
// string is only the lower case

//Ck arr len > 3
//Ck is it palindrome
//If not, Ck remove one char
//If not, Ck remove two char
//If not, not possible

const palindromeCreator = (arr) => {

  if(arr.length<3) return "Not possible";
  if(isPalindrome(arr)) return "Palindrome";

  // remove one letter
  for (let i = 0; i < arr.length; i++) {
    let removed_one_letter = arr.slice(0,i) + arr.slice(i+1)
    if(isPalindrome(removed_one_letter)) return `=>${arr[i]}`
  }

  // remove two letters
  // abzehba => abehba => abhba
  for (let i = 0; i < arr.length; i++) {
    let removed_one_letter = arr.slice(0,i) + arr.slice(i+1)
    for (let j = i; j < removed_one_letter.length; j++){
      let removed_two_letters = removed_one_letter.slice(0,j) + removed_one_letter.slice(j+1);
      if(isPalindrome(removed_two_letters)) return `=>${arr[i]},${removed_one_letter[j]}`
    }
  }

  return "Not Possible"

};

const isPalindrome = (arr) => {
  let reversed_arr = [];

  for (let i = arr.length-1; i >= 0; i--) {
    reversed_arr.push(arr[i])
  }

  return reversed_arr.join("") === arr ? true : false

};

console.log(palindromeCreator("kkjjjhjjj"));