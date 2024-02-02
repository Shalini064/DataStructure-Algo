/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let count = 0
    
    function dfs(i,sum){
        //base case
        if(i == nums.length){
            if(sum== target){
                count ++
            }
            return 
        }
        
        //for + 
        dfs(i+1,sum+nums[i])
        
        //for -
        dfs(i+1,sum-nums[i])
        
    }
    
    dfs(0, 0)
    return count
};