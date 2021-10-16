class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] ans = new int[n];
         Stack<Integer>  st = new Stack<>();
        
        for(int i = 0; i<n;i++){
            int currTemp =temperatures[i];
            
            while(!st.isEmpty() && temperatures[st.peek()]<currTemp){
                int preDay = st.pop();
                ans[preDay] = i -preDay;
            }
            st.push(i);
        }
        return ans;
    }
}