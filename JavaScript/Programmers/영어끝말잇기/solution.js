function solution(n, words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let p = (i % n) + 1;
        let turn = Math.ceil((i + 1) / n);

        if (i > 0) {
            let last = words[i - 1].split("").pop();
            if (i > words.indexOf(word) || words[i][0] !== last) {
                return [p, turn];
            }
        }
    }

    return [0, 0];
}
