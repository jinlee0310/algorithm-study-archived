function getMeasureCnt(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) cnt++;
    }
    return cnt;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        const cnt = getMeasureCnt(i);
        if (cnt % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}
