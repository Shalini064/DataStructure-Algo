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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        //Create a temporatry node in temp 
        ListNode temp = new ListNode();
        temp  = head;
        int count = 0;
        
        while(temp != null){
            count++;
            temp = temp.next;
        }
        
        if(count == n){
            head = head.next;
            return head;
        }
        
        temp = head;
        
        int nodeToBeTraversed = count-n;
        
        while(--nodeToBeTraversed >0)
             temp = temp.next;
             temp.next = temp.next.next;
        
        return head;
    }
}