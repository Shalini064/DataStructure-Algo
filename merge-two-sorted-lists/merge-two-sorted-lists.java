/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode l_node = new ListNode(0);
        ListNode currNode = l_node;
            
        while (l1!=null && l2!=null){
            if(l1.val<l2.val){
            currNode.next = l1;
            l1=l1.next;
            }
            else{
                currNode.next = l2;
                l2 = l2.next;
         }
            currNode = currNode.next;
        }
        
       
        if(l1!=null){
            currNode.next = l1;
            l1 = l1.next;
        }
         if(l2!=null){
            currNode.next = l2;
            l2 = l2.next;
        }
        return l_node.next;
    }
}