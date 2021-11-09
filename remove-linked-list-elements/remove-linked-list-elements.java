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
    public ListNode removeElements(ListNode head, int val) {
      ListNode ftemp = new ListNode(0,head);
        
        ListNode temp = ftemp;
        
        while(head!=null){
            if(head.val==val){
                
                temp.next=head.next;
            }
            else{
                temp=temp.next;
            }
            
           head=head.next;
            
        }
        return ftemp.next;
}
}