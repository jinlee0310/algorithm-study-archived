function solution(n) {
    const dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    }
    console.log(dp);
    return n === 1 ? 1 : dp[n - 1];
}
