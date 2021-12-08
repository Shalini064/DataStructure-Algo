class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int [] l_max = new int[n];
        int [] r_max = new int[n];
        int water = 0 ;
        
        for(int i = 0; i<n;i++){
            if(i==0){
                l_max[i]=height[0];
                r_max[n-1]= height[n-1];
            }    
            else{
                l_max[i]=Math.max(height[i],l_max[i-1]);
                r_max[n-i-1] = Math.max(height[n-i-1],r_max[n-i]);
            }
        }
        
        for(int i=0; i<n;i++){
            water+=Math.min(l_max[i],r_max[i])-height[i];
        }
        
        return water;
        
    }
}