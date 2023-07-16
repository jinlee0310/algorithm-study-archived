const convertBinary = (n) => {
    let s = n;
    const binary = [];
    while (s !== 0) {
        const rest = s % 2;
        binary.push(rest);
        s = Math.floor(s / 2);
    }
    return binary.reverse();
};

function solution(n) {
    var answer = 0;
    const binary = convertBinary(n);
    const numberOfOne = binary.filter((v) => v === 1).length;

    let cnt;
    let next = n + 1;
    while (numberOfOne !== cnt) {
        const nextBinary = convertBinary(next);
        cnt = nextBinary.filter((v) => v === 1).length;
        next++;
    }
    // console.log(next);

    return next - 1;
}

solution(78);
