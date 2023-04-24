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
 

    let matchingCharacters = new Set([...set1].filter(char => set2.has(char)));
  
    return matchingCharacters;
  }

console.log(getMatchingCharacters('ads hello','dddd HELLO'))