class MyLinkedList {
    
    private Node head;
    private int size;
    
    class Node{
        int val;
        Node next;
        Node(int d){
            val=d;
        }
    }
    
    public MyLinkedList() {
      head = new Node(0);
      size = 0;
    }
    
    //int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
    
    public int get(int index) {
       if(index< 0 || index>=size )
           return -1;
        
        Node temp = head;
        int i =0;
        while(i<=index){
            temp = temp.next;
            i++;
        }
        return temp.val;
    }
    
    public void addAtHead(int val) {
        addAtIndex(0, val);
        
    }
    
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }
    
    public void addAtIndex(int index, int val) {
        if(index < 0 || index>size)
            return ;
        
        Node temp = head;
        int i =0;
        while(i<index){
            temp = temp.next;
            i++;
        }
        Node newNode = new Node(val);
        newNode.next = temp.next;
        temp.next = newNode;
        size++;     
    }
    
    public void deleteAtIndex(int index) {
          if(index < 0 || index >= size) return;
        
        Node node = head;
        int i=0;
        while(i < index){
            node = node.next;
            i++;
        }
        node.next = node.next.next;
        size--;        
    }
    
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */