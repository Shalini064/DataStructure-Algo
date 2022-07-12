/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums = nums.sort()
    let outpputArr =[];
    for(let i =0;i<nums.length-1;i+=2){
        if(nums[i]!=nums[i+1]){
            outpputArr.push(nums[i]);
            i--;
           
        }        
    }
    if(outpputArr.length==2){
        return outpputArr
    }
    else{
        outpputArr.push(nums[nums.length-1])
        return outpputArr
    }

};


