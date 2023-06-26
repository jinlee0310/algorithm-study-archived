function solution(wallpaper) {
    let fileNumber = 0;
    const _wallpaper = wallpaper.map((v) => v.split(""));

    for (let j = 0; j < _wallpaper.length; j++) {
        for (let i = 0; i < _wallpaper[0].length; i++) {
            if (_wallpaper[j][i] === "#") fileNumber += 1;
        }
    }

    const col = [];
    const row = [];

    for (let j = 0; j < _wallpaper.length; j++) {
        for (let i = 0; i < _wallpaper[0].length; i++) {
            if (_wallpaper[j][i] === "#") {
                col.push(i);
                row.push(j);
            }
        }
    }

    // console.log(col, row);
    return [
        Math.min(...row),
        Math.min(...col),
        Math.max(...row) + 1,
        Math.max(...col) + 1,
    ];
}

const ans = solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
]);

console.log(ans);
