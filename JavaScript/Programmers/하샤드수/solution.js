function solution(x) {
    let sum = 0;
    for (let i = 0; i < x.toString().length; i++) {
        sum += Number(x.toString()[i]);
    }
    if (x % sum === 0) return true;
    return false;
}
