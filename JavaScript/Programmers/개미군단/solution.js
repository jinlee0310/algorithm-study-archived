function solution(hp) {
    const share1 = Math.floor(hp / 5);
    const share2 = Math.floor((hp % 5) / 3);
    const remain = (hp % 5) % 3;
    return share1 + share2 + remain;
}
