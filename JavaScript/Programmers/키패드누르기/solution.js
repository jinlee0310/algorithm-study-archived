const findIdx = (phone, number) => {
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            if (phone[j][i] === number) return [i, j];
        }
    }
};

const getDistance = (phone, rhand, lhand, number) => {
    const end = findIdx(phone, number);
    const ldist = bfs(lhand, end, phone);
    const rdist = bfs(rhand, end, phone);

    return [ldist, rdist];
};

const bfs = (start, end, board) => {
    const [startX, startY] = start;
    const [endX, endY] = end;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const q = [start];

    const visited = Array.from(Array(board.length), () =>
        Array(board[0].length).fill(0)
    );

    visited[startY][startX] = 1;
    while (q.length !== 0) {
        const [x, y] = q.shift();

        if (x === endX && y === endY) return visited[endY][endX] - 1;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                0 <= nx &&
                0 <= ny &&
                nx < board[0].length &&
                ny < board.length &&
                visited[ny][nx] === 0
            ) {
                visited[ny][nx] = visited[y][x] + 1;
                q.push([nx, ny]);
            }
        }
    }
};

function solution(numbers, hand) {
    let answer = "";

    const lArr = [1, 4, 7];
    const rArr = [3, 6, 9];

    const phone = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    let [lx, ly] = [0, 3];
    let [rx, ry] = [2, 3];
    numbers.map((number) => {
        if (lArr.includes(number)) {
            answer += "L";
            [lx, ly] = findIdx(phone, number);
        } else if (rArr.includes(number)) {
            answer += "R";
            [rx, ry] = findIdx(phone, number);
        } else {
            const [ldist, rdist] = getDistance(
                phone,
                [rx, ry],
                [lx, ly],
                number
            );
            let h;
            if (ldist > rdist) h = "R";
            else if (ldist < rdist) h = "L";
            else {
                if (hand === "left") h = "L";
                else h = "R";
            }
            answer += h;
            if (h === "R") [rx, ry] = findIdx(phone, number);
            else [lx, ly] = findIdx(phone, number);
        }
    });
    console.log(answer);
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
