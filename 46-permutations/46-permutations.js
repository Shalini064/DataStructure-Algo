/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result=[];
    let n = nums.length
    
    
   const  makePermutation=(pos,nums)=>{
        if(pos>=n-1){
            result.push(nums.slice());
            return ;
        }
        else{
            for(let i =pos;i<n;i++){
                //swap
                [nums[i],nums[pos]]=[nums[pos],nums[i]];
                makePermutation(pos+1,nums);
                [nums[i],nums[pos]]=[nums[pos],nums[i]];
            }
        }
    }
   makePermutation(0,nums);
    return result;
};