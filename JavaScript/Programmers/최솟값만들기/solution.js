function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    const multiple = A.map((v, idx) => v * B[idx]);
    return multiple.reduce((acc, cur) => acc + cur);
}

solution([1, 4, 2], [5, 4, 4]);
