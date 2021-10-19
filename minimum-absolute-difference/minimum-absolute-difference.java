class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        
       int mindiff = Integer.MAX_VALUE;
        for(int i =1 ; i<arr.length ; i++){
            mindiff = Math.min(mindiff, arr[i]-arr[i-1]);
        }
        
        List diff = new ArrayList<List<Integer>>();
        for(int i = 1; i<arr.length;i++){
            if(arr[i]-arr[i-1] == mindiff)
                diff.add(List.of(arr[i-1],arr[i]));
        }
        return diff;
    }
}