// 인풋과 아웃풋이 무엇?
// 만약 인풋이 null 이면?
// 인풋 값이 invalid 한 경우

//if the input is null
//return null
//if the input has blank?

//iterate each value of the string from the end
//Making the new array.push(value from the end)
//return the new array

const reverse = (string) => {
  let result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }
  return result.join("");
};

// console.log(reverse("as d"));

const palindrome = (string) => {
  let result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }
  result.join("");
  return string === result.join("") ? true : false;
};

// console.log(palindrome('ads'))

function getMatchingCharacters(string1, string2) {
    let set1 = new Set(string1);
    let set2 = new Set(string2);
 
    console.log('set2',set2)

    let matchingCharacters = new Set([...set1].filter(char => set2.has(char)));
  
    return matchingCharacters;
  }

 console.log('====>',getMatchingCharacters('dddd','dddd '))

let string1 = "Hello World";
let string2 = "Hey world";
let nonMatchingCharacters = "";

for (let i = 0; i < string1.length; i++) {
  let char = string1[i];
  if (!string2.includes(char) && !nonMatchingCharacters.includes(char)) {
    nonMatchingCharacters += char;
  }
}

// console.log("Non-matching characters:", nonMatchingCharacters);

function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      
      // check if the character is a vowel
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelsCount++;
      } else if (char >= 'a' && char <= 'z') {
        consonantsCount++;
      }
    }
    
    return { vowels: vowelsCount, consonants: consonantsCount };
  }