function solution(N, stages) {
    const ratio = [];
    let users = stages.length;

    for (let i = 1; i <= N; i++) {
        if (users === 0) {
            ratio.push([i, 0]);
            continue;
        }
        const cnt = stages.filter((v) => v === i).length;
        ratio.push([i, cnt / users]);
        users -= cnt;
    }

    console.log(ratio.sort((a, b) => b[1] - a[1]));
    return ratio.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
    // return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
