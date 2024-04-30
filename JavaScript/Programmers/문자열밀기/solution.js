function solution(A, B) {
    const doubleB = B + B;
    if (!doubleB.includes(A)) return -1;
    const idx = doubleB.indexOf(A);
    return idx;
}
