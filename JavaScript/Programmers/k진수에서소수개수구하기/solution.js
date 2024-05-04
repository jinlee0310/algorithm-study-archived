function convert(n, k) {
    const arr = [];
    while (Math.floor(n / k) > 0) {
        arr.push(n % k);
        n = Math.floor(n / k);
    }
    arr.push(n % k);
    return arr.reverse().join("");
}

function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    const convertedNum = convert(n, k);
    convertedNum.split("0").forEach((v) => {
        const number = Number(v);
        if (isPrime(number) && number >= 2) answer++;
    });
    return answer;
}
