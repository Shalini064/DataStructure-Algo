/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let outputArr = [];
    let index =0
    for(let i = 0; i<s.length;i++ ){
        index = indices[i];
        outputArr[index]=s.charAt(i);
    }
    
   return outputArr.join('')
};