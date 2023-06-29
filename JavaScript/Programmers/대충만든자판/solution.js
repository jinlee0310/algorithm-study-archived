function solution(keymap, targets) {
    const answer = [];
    targets.forEach((target) => {
        let cnt = 0;
        let idxArr;
        for (let i = 0; i < target.length; i++) {
            idxArr = keymap
                .map((key) => {
                    const idx = key.split("").findIndex((v) => v === target[i]);
                    return idx;
                })
                .filter((v) => v !== -1);
            // console.log(idxArr);
            if (idxArr.length === 0) {
                answer.push(-1);
                break;
            } else {
                const min = Math.min(...idxArr);
                cnt += min + 1;
            }
        }
        if (idxArr.length !== 0) answer.push(cnt);
    });
    // console.log("??", answer);
    return answer;
}

solution(["AGZ", "BSSS"], ["ASA", "BGZ"]);
