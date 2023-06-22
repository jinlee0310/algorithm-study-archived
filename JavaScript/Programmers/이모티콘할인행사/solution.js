const pwr = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);

    const res = [];
    arr.forEach((v) => {
        const pwrs = pwr(arr, num - 1);
        const attach = pwrs.map((pwr) => [v, ...pwr]);

        res.push(...attach);
    });

    return res;
};

function solution(users, emoticons) {
    const discounts = pwr([10, 20, 30, 40], emoticons.length);

    const joinUsers = discounts.map((discount) => {
        let plusUser = 0;
        let totalPrice = 0;
        users.forEach((user) => {
            const [userDiscount, price] = user;
            const discountEmoticonsPrice = discount
                .map((v, idx) => {
                    if (v >= userDiscount)
                        return emoticons[idx] * ((100 - v) / 100);
                    else return 0;
                })
                .reduce((acc, cur) => acc + cur);

            if (discountEmoticonsPrice >= price) plusUser += 1;
            else totalPrice += discountEmoticonsPrice;
        });
        return [plusUser, totalPrice];
    });

    joinUsers.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

    return joinUsers[0];
}

solution(
    [
        [40, 2900],
        [23, 10000],
        [11, 5200],
        [5, 5900],
        [40, 3100],
        [27, 9200],
        [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
);
