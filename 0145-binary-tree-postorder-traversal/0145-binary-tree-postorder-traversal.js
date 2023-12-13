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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    
    let result = []
    postorder(root)
    
    function postorder(root){
       if(!root){
           return null
       } 
       postorder(root.left) 
       postorder(root.right)
       result.push(root.val)
    }
    return result
};