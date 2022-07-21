/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans =[];
    let subset =[];
    const  makeSubset =(pos)=>{
        if(pos>=nums.length){
            ans.push(subset.slice())
            return;
        }
             subset.push(nums[pos]);
             makeSubset(pos+1);
             subset.pop();
             makeSubset(pos+1);
        
        
        
    }
    
    makeSubset(0)
    return ans;
};