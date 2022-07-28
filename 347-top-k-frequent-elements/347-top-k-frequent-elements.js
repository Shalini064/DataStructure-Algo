/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let result =[];
    
    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
           let c = map.get(nums[i])
           map.set(nums[i],++c) 
        }
        else{
            map.set(nums[i],1)
        }
    }
    
    let sortedMap =new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
    
    for(let [i,v] of sortedMap.entries()){
        if(result.length == k)break;
        result.push(i);
    }
    return result;
};