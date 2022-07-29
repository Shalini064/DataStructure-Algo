/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[...nums1,...nums2]
    arr.sort((a,b)=>a-b)
    let len = Math.ceil(arr.length/2)
    if(arr.length%2==0){
        return (arr[len-1]+arr[len])/2
    }else{
        return arr[len-1]
    }
};