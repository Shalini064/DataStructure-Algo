/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
   //Bottom up approch 
    let n = s.length
    let dpArr = new Array(n+1)
    dpArr[0]= true //empty string
    
    for(let i =0; i< n;i++){
        for(let word of wordDict){
            
            //if word in wordDict length is greater that s 
           if(i+word.length>n){
               continue
           } 
           if(s.substring(i,i+word.length) == word && dpArr[i]){
               dpArr[i+word.length] = true
           }
           if(dpArr[n]){
              return true
           }
        }
    }
    return false
};