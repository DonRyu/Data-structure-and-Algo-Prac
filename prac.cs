// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler
using System;
using System.Collections.Generic;

public class HelloWorld
{
    public static void Main(string[] args)
    {
       
         Console.WriteLine(PalindromeCreate("lmadamp"));
    }
    
    public static string PalindromeCreate(string str)
{
    
    if(IsPalindrome(str)) return "Palindrome";
    
    //remove one letter
    for(int i = 0; i<str.Length; i++){
        string oneLetter = str.Remove(i,1);
        if(IsPalindrome(oneLetter)) return str[i].ToString();
    }
    
    //remove two letters
    for(int i = 0; i<str.Length; i++){
        string oneLetter = str.Remove(i,1);
        for(int j = i; j<oneLetter.Length; j++){
            string twoLetters = oneLetter.Remove(j,1);
            if(IsPalindrome(twoLetters)) return $"{str[i]}{oneLetter[j]}";
        }
    }
    
    return "not possible";
}

    
    public static bool IsPalindrome(string str){
       char[] arr = str.ToCharArray();
       Array.Reverse(arr);
       string reversedStr = new String(arr);
       return reversedStr == str ? true : false;
    
    }
}