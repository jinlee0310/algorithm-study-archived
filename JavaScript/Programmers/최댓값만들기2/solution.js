function combination(array, num) {
    const res = [];
    if (num === 1) return array.map((v) => [v]);

    array.forEach((v, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combinations = combination(rest, num - 1);
        const attach = combinations.map((combination) => [...combination, v]);
        res.push(...attach);
    });

    return res;
}

function solution(numbers) {
    const multiples = [];
    const combinations = combination(numbers, 2);

    combinations.forEach((combination) => {
        multiples.push(combination.reduce((acc, cur) => acc * cur));
    });

    return Math.max(...multiples);
}
