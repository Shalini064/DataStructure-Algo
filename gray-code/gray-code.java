class Solution {
    public List<Integer> grayCode(int n) {
              
        if(n == 1)
        {
            List<Integer> list = new ArrayList<>();
            list.add(0);
            list.add(1);
            return list;
        }
        
        List<Integer> previous_res = grayCode(n-1);
        
        List<Integer> merge_res = new ArrayList<>();
        
        //CONCATINATING 0 FROM START
        for(int i=0;i<previous_res.size();i++)
            merge_res.add(0+2*previous_res.get(i));
        
        //CONCATINATING 1 FROM END 
        for(int i=previous_res.size()-1;i>=0;i--)
            merge_res.add(1+2*previous_res.get(i));
        
        return merge_res;
      
    }
}