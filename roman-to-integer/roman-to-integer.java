class Solution {
    public int romanToInt(String s) {
        LinkedHashMap<Character,Integer> map = new  LinkedHashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);
        
        int right = map.get(s.charAt(s.length()-1));
        int value = right;
        
        for(int i =s.length()-2;i>=0;i--){
           int left = map.get(s.charAt(i));
                if(right>left){
                    value-=left;
                }
                else{
                    value+=left;
                    right=left;
                }
            }
        
        return value;
    }
}