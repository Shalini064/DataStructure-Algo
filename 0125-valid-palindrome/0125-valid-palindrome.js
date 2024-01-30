/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
   
    console.log(str)
    let len = str.length
    for (let i =0;i<str.length;i++){
        if(str[i]!==str[len-1-i])
            return false
    }
    return true
};