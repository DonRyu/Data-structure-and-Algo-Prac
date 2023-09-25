def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow,fast = head,head

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        #second_half = slow.next, 이렇게 되면 [1,2] 일떄 에러가 남, right가 None 되어서 while를 안탐
        second_half = slow
        # slow.next = None ,이렇게 하면 에러 [1,2,2,1] 일 경우 기존 LL이 훼손됨
        # 1 2 // 2 None 이렇게 계산 하게됨

        prev = None

        while second_half: 
            next_node = second_half.next 
            second_half.next = prev 
            prev = second_half
            second_half = next_node
    
       
        left,right = head,prev 
 
        while left and right:           
        
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        
        return True