class Solution {
    public int[] sortArrayByParity(int[] nums) {
       
        Arrays.sort(nums);
        int j = nums.length-1;
        int i =0;
        while(i!=j){
            if(nums[i]%2==0){
                
            }
            else{
                int temp = nums[j];
                nums[j] = nums[i];
                nums[i]=temp;
                
                j =j-1;
                i = i-1;
            }
            i = i+1;
        }
        return nums;
    }
}