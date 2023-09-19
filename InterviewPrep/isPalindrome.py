def isPalindrome(self, head: Optional[ListNode]) -> bool:
        n_arr = []    

        current = head
        while current:
            n_arr.append(current.val)
            current = current.next

        return n_arr == n_arr[::-1]   
                