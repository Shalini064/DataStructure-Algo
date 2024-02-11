/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count =0
    for(let i =0; i<s.length;i++){
        //odd length palindrome
        helperPalindrome(s, i,i)
        
        //even length palindrome
        helperPalindrome(s, i,i+1)
    }
    
    return count
    
    function helperPalindrome(s, left, right){
        
        while(left>=0 && right<=s.length && s[left]===s[right]){
            count++
            left--
            right++
        }
    }
};