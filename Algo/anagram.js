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

validAnagram("someeee", "eeesome"); // false
