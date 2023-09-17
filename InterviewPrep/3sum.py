def threeSum(nums):
        n_arr = []
        nums.sort()

        for i in range(len(nums)-2):
            l,r = i+1, len(nums)-1

            while l < r:
                curr_sum = nums[i]+nums[l]+nums[r]

                if curr_sum == 0:
                    n_arr.append([i,l,r])
                elif curr_sum <0:
                     l +=1
                else:
                     r -=1        
         
        return n_arr

print(threeSum([-1,0,1,2,-1,-4]))