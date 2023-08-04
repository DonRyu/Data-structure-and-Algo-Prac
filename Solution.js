//#1 
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