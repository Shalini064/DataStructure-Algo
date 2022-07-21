/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output =[];
    let sum = 0
    let pos = 0;
    while(pos<nums.length-1){
      for(let i =pos+1;i<nums.length;i++){
        sum = nums[i]+nums[pos];
        if(sum===target){
            output.push(i,pos);
        }
    }  
        pos++;
    }
    
    return output;
};