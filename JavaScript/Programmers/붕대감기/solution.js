function solution(bandage, health, attacks) {
    const MAX_HEALTH = health;
    const [t, x, y] = bandage;

    for (let i = 0; i < attacks.length; i++) {
        let prevSec = 0;
        if (i !== 0) prevSec = attacks[i - 1][0];
        const [sec, attack] = attacks[i];
        health += (sec - 1 - prevSec) * x;
        if (sec - 1 - prevSec >= t) {
            const share = Math.floor((sec - 1 - prevSec) / t);
            health += y * share;
        }
        if (health >= MAX_HEALTH) {
            health = MAX_HEALTH;
        }
        health -= attack;
        // console.log(health);
        if (health <= 0) return -1;
    }

    return health;
}

// const answer1 = solution([5, 1, 5], 30, [
//     [2, 10],
//     [9, 15],
//     [10, 5],
//     [11, 5],
// ]);

const answer2 = solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
]);

// const answer3 = solution([4, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
// ]);

// const answer4 = solution([1, 1, 1], 5, [
//     [1, 2],
//     [3, 2],
// ]);
