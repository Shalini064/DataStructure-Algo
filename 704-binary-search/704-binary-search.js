/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r=nums.length-1;
    while (l<=r){
        let mid = Math.floor((l+r)/2);
        let midVal = nums[mid];
        if(midVal===target){
            return mid;
        }
        else if(midVal>target){
            r = mid-1;
        }
        else{
            l = mid+1;
        }
    }
    return -1;
};