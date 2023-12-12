function solution(price, money, count) {
    let s = 0;
    for (let i = 1; i <= count; i++) {
        s += price * i;
    }
    if (money >= s) return 0;
    return s - money;
}
