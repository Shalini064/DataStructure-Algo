class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
       //Finding max in candies array
        int max = 0;
        for(int i = 0; i< candies.length;i++){
            if(max<=candies[i])
                max = candies[i];
        }
        
        List<Boolean> outputArray = new ArrayList<Boolean>();
        for(int i = 0; i< candies.length ; i++){
            outputArray.add(candies[i]+extraCandies>=max);
        }
    return outputArray;
    }
}