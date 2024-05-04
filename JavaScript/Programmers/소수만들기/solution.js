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

function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    const combinations = combination(nums, 3);
    const sums = combinations.map((combination) => {
        return combination.reduce((acc, cur) => acc + cur, 0);
    });
    let answer = 0;
    sums.forEach((sum) => {
        if (isPrime(sum)) answer++;
    });

    return answer;
}
