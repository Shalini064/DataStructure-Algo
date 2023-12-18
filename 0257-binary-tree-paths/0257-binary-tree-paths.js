/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let arr =[]
   
    function dfs(root,path){
      if(root==null)  {
          return
      }
     if(!root.left && !root.right){
         arr.push(path+root.val)
     }
     dfs(root.left,path+root.val+'->')
     dfs(root.right,path+root.val+'->')
    }
    dfs(root,'')
    return arr 
};