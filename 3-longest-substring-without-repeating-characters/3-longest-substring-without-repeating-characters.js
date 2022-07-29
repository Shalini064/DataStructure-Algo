/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str ="";
    let max=0;
    
    for(let i =0;i<s.length;i++){
        let strIndex = str.indexOf(s[i])+1
        if(strIndex===0){
            str+=s[i]
            max = Math.max(max,str.length)
        }
        else{
           str=str.substring(strIndex);
           str+=s[i];
        }
    }
    return max;
};