class Solution {
    public List<List<String>> partition(String s) {
       List<List<String>> res = new ArrayList();
        helper(0,s,new ArrayList(), res);
        return res;
    }
    public void helper(int start,String s,ArrayList<String>al,List<List<String>> res) {
       if(start == s.length())
        res.add(new ArrayList(al));
        for(int i=start;i<s.length();i++) {
            if(isPalindrome(s,start,i, res)) {
            al.add(s.substring(start,i+1));
            helper(i+1,s,al, res);
            al.remove(al.size()-1);}
        }
    }
    public boolean isPalindrome(String s,int i,int j,List<List<String>> res) {
        while(i < j) {
            if(s.charAt(i++) != s.charAt(j--)) return false;
        }
        return true;
    }
    
}