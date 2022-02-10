//FIRST ATTEMPT 
// function isPalindrome(word) {
//   let wordLetters = word.split("");
//   let reverseWord = wordLetters.reverse();
//   let originalWord = wordLetters.join("");
//   let backwardWord = reverseWord.join("");
//   return Boolean(originalWord === backwardWord);
// }

//CLEANED UP VERSION
function isPalindrome(word) {
  let backwardWord = word.split("").reverse().join("");
  return word === backwardWord;
}

/* 
  take an argument of a word
  split the word by letters into an array.
  add each letter of that array into a new array in revers order.
  compare to the two arrays.
*/

/*
 Taking the word as an argument, the function first splits the word into letters into an array. Then, we iterate through the area and put the letters in reverse order. Then we rejoin the words and compare them, returning a boolean value. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  isPalindrome("racecare")
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
