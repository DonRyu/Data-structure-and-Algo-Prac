// error version
const validAnagram = (word, word2) => {
  let set = new Set();
  let validWord = word.toLowerCase().replace(/\s+/g, "");
  let validWord2 = word2.toLowerCase().replace(/\s+/g, "");
  let set2 = new Set(validWord);

  if (word.length !== word2.length) {
    return console.log("false");
  }

  for (let i = 0; i < validWord.length; i++) {
    set.add(validWord[i]);
    set.add(validWord2[i]);
  }

  console.log(set.size === set2.size ? "true" : "false");
};

// anagram
// gramana

const validAnagram2 = (word, word2) => {
  let letter = {};

  if(word.length !== word2.length){
    return false
  }

  for (let i = 0; i < word.length; i++) {
    let item = word[i]

    if (letter[item]) {
      letter[item] += 1;
    } else {
      letter[item] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    let item = word2[i]

    if (!letter[item]) {
      return false;
    } else {
      letter[item] -= 1;
    }
  }

  return true
};

validAnagram2("asdasd", "dsadsads");
