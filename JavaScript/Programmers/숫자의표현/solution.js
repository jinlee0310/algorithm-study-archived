function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (j = i; j <= n; j++) {
            sum += j;
            if (sum > n) break;
            if (sum === n) {
                answer += 1;
                break;
            }
        }
    }
    console.log(answer);
    return answer;
}

solution(9999);
