def findSafeWays(grid):
    n = len(grid)
    m = len(grid[0])
    mod = 10**7 + 7

    # Create a 2D DP array
    dp = [[0] * m for _ in range(n)]

    # Initialize the first cell
    dp[0][0] = 1 if grid[0][0] == 1 else 0

    # Fill the DP array
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 1:
                if i > 0:
                    dp[i][j] += dp[i-1][j]
                if j > 0:
                    dp[i][j] += dp[i][j-1]
                dp[i][j] %= mod

    # Return the result modulo 10^7
    return dp[n-1][m-1] % mod

# Example usage
grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
print(findSafeWays(grid))  # Output: 2
