/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map =new Map()
    let count =0
    for(let l of s){
        if(map.has(l)){
            eleCount = map.get(l)
            map.set(l,eleCount+1)
            if((eleCount+1)%2 ==0){
                count+=2
            }
        }
        else{
            map.set(l,1)
        }
    }
    //return s.length is big it means i there is few more char is
    //remaining which i can keep in mid so count+1 
    //if s.length == count  so no more options so return count 
    return s.length>count ? count+1:count
};