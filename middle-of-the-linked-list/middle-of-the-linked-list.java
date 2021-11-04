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
    public ListNode middleNode(ListNode head) {
        
        
        //taking lenght of the link list 
        ListNode temp = head;
        int count = 1;
        while(temp.next!=null){
            count++;
            temp = temp.next;
        }
        
        int mid = count/2+1;
        
        ListNode l = head;
        for(int i =1 ;i<mid;i++){
            l=l.next;
        }
        return l;
    }
}