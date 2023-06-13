const pwr = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);

    const res = [];
    arr.forEach((v, idx, arr) => {
        const rest = arr.slice(idx);
        const pwrs = pwr(rest, num - 1);
        const attach = pwrs.map((pwr) => [v, ...pwr]);

        res.push(...attach);
    });

    return res;
};
