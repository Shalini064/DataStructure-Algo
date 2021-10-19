class Solution {
    public boolean isValid(String s) {
       
        Stack<Character> stack = new Stack<>();
        for(char c : s.toCharArray()){
            if(c == '(')
                stack.push(')');
            else if(c == '{')
                stack.push('}');
            else if(c == '[')
                stack.push(']');
            else if(stack.isEmpty() || c!= stack.pop()) //checking if closing is same as top one
                    return false;
            }
        return stack.isEmpty();
    }
}