function combination(arr, num) {
    const res = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combinations = combination(rest, num - 1);
        const attach = combinations.map((combination) => [v, ...combination]);
        res.push(...attach);
    });
    return res;
}

function solution(number) {
    let answer = 0;
    const arr = combination(number, 3);
    // console.log(arr)
    arr.forEach((v) => {
        const sum = v.reduce((acc, cur) => acc + cur, 0);
        if (sum === 0) answer++;
    });
    return answer;
}
