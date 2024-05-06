function solution(n) {
    let answer = 0;
    for (let i = 0; i < n.toString().length; i++) {
        answer += Number(n.toString()[i]);
    }
    return answer;
}
