function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        const str = t.substr(i, p.length);
        if (Number(p) >= Number(str)) {
            answer += 1;
        }
    }
    return answer;
}
