class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res= new ArrayList<>();
        boolean[] visited = new boolean[nums.length];
        backTrack(res, nums,new ArrayList(),visited);
        return res;
    }
    
    void backTrack(List<List<Integer>> res, int [] nums,List<Integer> curr, boolean[] visited ){
        if(curr.size() == nums.length){
            res.add(new ArrayList(curr));
            return;
        }
        
        for(int i = 0; i<nums.length;i++){
            if(visited[i]==true){
                continue;   
            } 
            else{
             visited[i]=true;
             curr.add(nums[i]);
             backTrack(res, nums,curr,visited);
             visited[i]=false;
             curr.remove(curr.size()-1);
        }
        }
    }
}