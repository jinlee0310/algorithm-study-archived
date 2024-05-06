function solution(spell, dic) {
    for (let d of dic) {
        const set = new Set(d.split("").filter((v) => spell.includes(v)));
        if (set.size === spell.length) {
            return 1;
        }
    }
    return 2;
}
