# for i in range(5,1,-1):
#     print(i)


def maxSubArray(nums):
    max = nums[0]
    for i in range(len(nums)):
        curr_max =  0
        for j in range(i,len(nums)):
           curr_max += i
           max = max(max,curr_max)


def maxSubArray(nums):
    max_sum = float('-inf')  # 최대 부분합 초기å화

    for i in range(len(nums)):
        current_sum = 0  # 현재까지의 부분합 초기화

        for j in range(i, len(nums)):
            current_sum += nums[j]  # 현재 원소를 현재 부분합에 추가
            max_sum = max(max_sum, current_sum)  # 최대 부분합 갱신

    return max_sum

maxSubArray([1,2,3])