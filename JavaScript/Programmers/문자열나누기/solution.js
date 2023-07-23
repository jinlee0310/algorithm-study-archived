function solution(s) {
    let answer = 0;

    let cntX = 1;
    let cntNotX = 0;
    let x = "";
    let notX = "";
    for (let i = 0; i < s.length; i++) {
        x = s[i];
        while (cntX !== cntNotX) {
            i++;
            notX = s[i];
            if (s[i] === x) cntX += 1;
            else cntNotX += 1;
        }
        // console.log(x, notX, cntX, cntNotX);
        cntX = 1;
        cntNotX = 0;
        answer += 1;
    }
    console.log(answer);
    return answer;
}

solution("aaabbaccccabba");
