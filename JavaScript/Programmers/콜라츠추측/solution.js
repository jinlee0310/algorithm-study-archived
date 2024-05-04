function solution(num) {
    let answer = 0;
    if (num === 1) return 0;
    while (answer <= 500 && num > 1) {
        answer++;
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
    }
    if (answer > 500) return -1;
    return answer;
}
