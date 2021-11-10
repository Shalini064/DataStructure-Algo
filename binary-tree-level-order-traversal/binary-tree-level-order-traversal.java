/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        Queue<TreeNode> q = new ArrayDeque<>();
        
        if(root==null){
            return res;
        }
        
        q.add(root);
       
        while(!q.isEmpty()){
            List<Integer> levelNodes = new ArrayList<>();
            int level = q.size();
            for(int i = 0;i<level ;i++)
            { 
               TreeNode curr = q.remove();
                levelNodes.add(curr.val);
                if(curr.left!=null){
                    q.add(curr.left);
                }
                if(curr.right!=null){
                    q.add(curr.right);
                }
            
            
        }
        res.add(levelNodes);
        
    }
    return res;
    }
}