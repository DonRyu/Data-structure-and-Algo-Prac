def maxSubArr(nums):
    sub_max = nums[0]
    curr_max = 0
    for i in nums:
            curr_max += i
            if curr_max < i:
               curr_max = i
            sub_max = max(sub_max,curr_max)
        
    return sub_max