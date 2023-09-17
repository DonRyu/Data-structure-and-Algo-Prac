def square(nums):
    new_arr = []

    for i in nums:
        new_arr.append(i*i)

    new_arr.sort()
    return new_arr

def square2(nums):
    new_arr = []
    l,r = 0,len(nums)-1

    while l < r:
        if nums[l]*nums[l] > nums[r]*nums[r]:
            new_arr.append(nums[r]*nums[r])
            r -= 1
        else:    
            new_arr.append(nums[l]*nums[l])
            l += 1

    new_arr.sort()        
    return new_arr



def sortedSquares(nums):
        new_arr = []
        l,r = 0,len(nums)-1

        while l <= r:
            if nums[l] * nums[l] > nums[r] * nums[r]:
                new_arr.append(nums[l]*nums[l])
                r -= 1
            else:    
                new_arr.append(nums[r]*nums[r])
                l += 1      
        return new_arr[::-1]
    
print(sortedSquares([1,2,3,4]))