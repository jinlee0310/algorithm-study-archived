function solution(s) {
    const answer = Array(s.length).fill(-1);
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                answer[i] = i - j;
            }
        }
    }
    return answer;
}
