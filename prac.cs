using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine (PalindromeCreator("abjchba"));
    Console.WriteLine (PalindromeCreator("kjjjhjjj"));
    Console.WriteLine (PalindromeCreator("abcde"));
  }

  static string PalindromeCreator(string str) {
    if (IsPalindrome(str)) return "palindrome";

    for (int i = 0; i < str.Length; i++) {
      string removed = str.Remove(i, 1);
      if (IsPalindrome(removed)) return str[i].ToString();
    }

    for (int i = 0; i < str.Length; i++) {
      string oneLetterRemoved = str.Remove(i, 1);
      for (int j = i; j < oneLetterRemoved.Length; j++) {
        string twoLettersRemoved = oneLetterRemoved.Remove(j, 1);
        if (IsPalindrome(twoLettersRemoved)) return $"{str[i]}{oneLetterRemoved[j]}";
      }
    }

    return "not possible";
  }

  static bool IsPalindrome(string str) {
    if (str.Length < 2) return false;

    for (int i = 0, j = str.Length - 1; i < j; i++, j--) {
      if (str[i] != str[j]) return false;
    }

    return true;
  }
}
