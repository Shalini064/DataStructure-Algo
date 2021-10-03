class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        subsetAns(nums,0 ,new ArrayList<>(), res);
        return res;
    
    }
    
    public void subsetAns(int[] nums, int start, List<Integer> currSet,List<List<Integer>> res ){
        res.add(new ArrayList(currSet));
        if(start==nums.length){
            return;
        }
        for(int i = start; i<nums.length;i++){
            if(i>start && nums[i]==nums[i-1]) continue;
            currSet.add(nums[i]);
            subsetAns(nums,i+1,currSet,res);
            currSet.remove(currSet.size()-1);
        }
    }
}