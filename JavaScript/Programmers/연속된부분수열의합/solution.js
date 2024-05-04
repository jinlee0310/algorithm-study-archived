function solution(sequence, k) {
    const candidates = [];
    let s = 0,
        e = 0;
    let sum = sequence[0];
    while (s < sequence.length && e < sequence.length) {
        if (sum > k) {
            s++;
            sum -= sequence[s - 1];
        } else if (sum < k) {
            e++;
            sum += sequence[e];
        } else {
            candidates.push([s, e]);
            e++;
            sum += sequence[e];
        }
    }
    // console.log(candidates)
    return candidates.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
