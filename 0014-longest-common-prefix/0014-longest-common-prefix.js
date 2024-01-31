/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //If there is no length of string 
    if(!strs.length){
        return ''
    }
    
    for (let i =0 ; i<=strs[0].length;i++){
        //Check every string is having same prefix or not
        if(!strs.every((string)=> string[i]==strs[0][i])){
            return strs[0].slice(0,i)
        }
    }
    return strs[0]
};