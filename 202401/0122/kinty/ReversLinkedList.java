class ReversLinkedList {
    public ListNode reverseList(ListNode head) {
        ListNode cur = head ;
        ListNode next = head;
        ListNode newHead = null;
        while(cur!=null){
            next = cur.next;
            cur.next = newHead;
            newHead = cur;
            cur = next;
        }
        return newHead;
    }
}
