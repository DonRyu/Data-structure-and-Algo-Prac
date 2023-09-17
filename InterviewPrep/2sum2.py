def twoSum(nums,target):
        curr_sum = []
        l,r = 0,len(nums)-1
        while l<r:
            curr_sum = nums[l] + nums[r]
            if curr_sum == target :
                return [l+1,r+1]
            elif curr_sum > target:
                 r -= 1
            elif curr_sum < target:
                 l +=1
