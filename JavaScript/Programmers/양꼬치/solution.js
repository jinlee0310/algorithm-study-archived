function solution(n, k) {
    const share = Math.floor(n / 10);
    const answer = n * 12000 + (k - share) * 2000;
    return answer;
}
