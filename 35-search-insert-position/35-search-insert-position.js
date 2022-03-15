/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0 ;
    let right = nums.length -1
    let middle
    let position
    
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if(nums[middle] === target) return middle
        if(target > nums[middle]) {
            position = middle + 1
            left = middle + 1
        }
        else {
            position = middle 
            right = middle - 1
        }
    }
    return position
    
};