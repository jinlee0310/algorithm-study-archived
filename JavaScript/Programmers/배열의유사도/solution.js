function solution(s1, s2) {
    let answer = 0;
    s1.forEach((v) => {
        const idx = s2.findIndex((s) => v === s);
        if (idx !== -1) answer++;
    });
    return answer;
}
