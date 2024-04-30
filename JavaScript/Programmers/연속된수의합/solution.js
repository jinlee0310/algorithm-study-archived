function solution(num, total) {
    const answer = [];
    for (let i = -1 * num; i <= total; i++) {
        let sum = 0;
        for (let j = i; j < i + num; j++) {
            sum += j;
        }
        if (sum === total) {
            for (let j = i; j < i + num; j++) {
                answer.push(j);
            }
            break;
        }
    }
    return answer;
}
