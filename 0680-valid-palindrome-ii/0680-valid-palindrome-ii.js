/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0 , end = s.length-1
    while(start<end){
       if(s[start]!==s[end]){
          return isValidPalindrome(s,start+1,end) ||  isValidPalindrome(s,start,end-1)
       }
         start++
         end--
    }
    
    return true
};

function isValidPalindrome(s,start,end){
    while(start<end){
        if(s[start]!==s[end])
            return false
        
        start++
        end--
    }
    return true
}



/*
Solution:

1. Use two pointers, one initialised to 0 and the other initialised to end of string. Check if characters at each index
are the same. If they are the same, shrink both pointers. Else, we have two possibilities: one that neglects character
at left pointer and the other that neglects character at right pointer. Hence, we check if s[low+1...right] is a palindrome
or s[low...right-1] is a palindrome. If one of them is a palindrome, we know that we can form a palindrome with one deletion and return true. Else, we require more than one deletion, and hence we return false.
*/