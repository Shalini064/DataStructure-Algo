/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head , fast = head;
        
        
          if(head == null || slow.next==null ||slow.next.next==null){
            return false;
         }
        if(slow.next.next!=null){
            fast=slow.next.next;
        }
        
        while(fast!=null && fast.next!=null && slow!=fast){
            slow=slow.next;
            fast=fast.next.next;
        }
        
        if(slow==fast){
            return true;
        }
        
        return false;
    }
}