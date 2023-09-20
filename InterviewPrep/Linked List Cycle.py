def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                return True
        
        return False


def hasCycle(self, head: Optional[ListNode]) -> bool:
        hash_set = set()

        while head:

            if head in hash_set:
                return True
            hash_set.add(head)    
            head = head.next    
        return False