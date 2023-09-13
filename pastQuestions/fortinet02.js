function findSafeWays(grid) {
    const MOD = 1e9 + 7;
    const n = grid.length;
    const m = grid[0].length;
  
    // dp 배열 생성 및 초기화
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  
    // 시작 지점 초기화
    dp[0][0] = grid[0][0] === 1 ? 1 : 0;
  
    // // i = 0 j = 1
    // for (let i = 0; i < n; i++) {
    //   for (let j = 0; j < m; j++) {
    //     if (grid[i][j] === 1) {
    //       if (i > 0) {
    //         dp[i][j] += dp[i - 1][j];
    //       }
    //       if (j > 0) {
    //         //dp[0][1] += dp[0][0]
    //         dp[i][j] += dp[i][j - 1];
    //       }
    //       dp[i][j] %= MOD;
    //     }
    //   }
    // }

    // return dp[n - 1][m - 1] % MOD;
  }
  
  // 예제 입력
  const grid = [
    [1, 1, 1],
    [0, 1, 1],
    [1, 1, 1]
  ];

  let k = 0

  console.log("==>",k %= 1e9 + 7)
  
  // 결과 출력
//   console.log(findSafeWays(grid)); // 출력: 2
  