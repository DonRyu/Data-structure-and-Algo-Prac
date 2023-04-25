function makePalindrome(str) {
    const len = str.length;
    let i = 0, j = len - 1;
    let deleted = 0;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        if (deleted === 2) {
          return "impossible";
        }
        if (str[i + 1] === str[j]) {
          i++;
          deleted++;
        } else if (str[i] === str[j - 1]) {
          j--;
          deleted++;
        } else if (str[i + 1] === str[j - 1]) {
          i++;
          j--;
          deleted++;
        } else {
          return "impossible";
        }
      } else {
        i++;
        j--;
      }
    }
  
    // 문자열이 이미 회문일 경우, 해당 문자열을 그대로 반환
    if (deleted === 0) {
      return str;
    }
  
    let palindrome = "";
    for (let k = 0; k < len; k++) {
      if (deleted === 0) {
        palindrome += str[k];
        continue;
      }
      if (str[k] === str[len - k - 1]) {
        palindrome += str[k];
      } else {
        deleted--;
      }
    }
    return palindrome;
  }
  