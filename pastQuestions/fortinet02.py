grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

def findSafeWays(grid):
    n = len(grid) #3
    m = len(grid[0]) #3
    mod = (10**9) + 7

    dp = [[0] * m for _ in range(n)] 

    dp[0][0] = 1 if grid[0][0] == 1 else 0

    for i in range(n):
        for j in range(m):
            if grid[i][j] == 1:
                if i > 0:
                    dp[i][j] += dp[i-1][j]
                    # print("i",dp[i][j])
                if j > 0: 
                    dp[i][j] += dp[i][j-1]
                    # print("j",dp[i][j])
                dp[i][j]
                
    return dp[n-1][m-1] % mod

# Example usage
# findSafeWays(grid)
print(findSafeWays(grid))  # Output: 2
