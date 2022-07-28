/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result =[];
    const map =new Map();
    for(let i =0;i<strs.length;i++){
        sortedS= strs[i].split('').sort().join();
        if(map.has(sortedS)){
            map.get(sortedS).push(strs[i])
        }else{
            map.set(sortedS,[strs[i]])
        }
        
    }
    
    console.log(map)
    for(let [key,value] of map){
        result.push(value)
    }
    
    return result
    
};