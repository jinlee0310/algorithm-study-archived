function solution(array) {
    const max = Math.max(...array);
    const idx = array.findIndex((v) => v == max);
    return [max, idx];
}
