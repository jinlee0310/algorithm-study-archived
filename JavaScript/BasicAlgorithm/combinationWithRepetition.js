const cwr = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);

    const res = [];
    arr.forEach((v, idx, arr) => {
        const rest = arr.slice(idx);
        const cwrs = cwr(rest, num - 1);
        const attach = cwrs.map((cwr) => [v, ...cwr]);

        res.push(...attach);
    });

    return res;
};
