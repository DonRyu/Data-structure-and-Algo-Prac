def closestSum(nums,target):
    l,r = 0, len(nums)-1
    closest_sum = float('inf')

    for i in range(len(nums)):
        l = i+1

        while l <= r:
                curr_sum = nums[i]+nums[l]+nums[r]

                if(closest_sum>abs(target-curr_sum)):
                    closest_sum = abs(target-curr_sum)

                if curr_sum < target:
                    l +=1
                if  curr_sum > target:  
                    r -=1
                if  curr_sum == target:
                    return curr_sum    
                
    return closest_sum
