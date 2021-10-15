class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<Integer>();
        for(int num: nums){
            numSet.add(num);
        }
        
        int longestCount = 0;
        
        for(int num : numSet){
            if(!numSet.contains(num-1)){
                int currentNum = num;
                int currentCount = 1;
                while(numSet.contains(currentNum+1)){
                    currentNum+=1;
                    currentCount+=1;
                   
                }
                
               longestCount =  Math.max(longestCount,currentCount);
            }
        }
        return longestCount;
    }
}