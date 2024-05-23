function bfs(visited, maps, start, end) {
    const [startX, startY] = start;
    const [endX, endY] = end;
    const queue = [[startX, startY]];

    visited[startY][startX] = 1;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (queue.length !== 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                0 <= nx &&
                nx < maps[0].length &&
                0 <= ny &&
                ny < maps.length &&
                visited[ny][nx] === 0 &&
                maps[ny][nx] !== "X"
            ) {
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([nx, ny]);
                if (nx === endX && ny === endY) {
                    break;
                }
            }
        }
    }
    return visited[endY][endX] - 1;
}

export default function solution(maps) {
    const visited = Array.from(Array(maps.length), () =>
        new Array(maps[0].length).fill(0)
    );

    let startX, startY, endX, endY, leverX, leverY;
    for (let i = 0; i < maps[0].length; i++) {
        for (let j = 0; j < maps.length; j++) {
            if (maps[j][i] === "S") {
                startX = i;
                startY = j;
            } else if (maps[j][i] === "L") {
                leverX = i;
                leverY = j;
            } else if (maps[j][i] === "E") {
                endX = i;
                endY = j;
            }
        }
    }
    const leverResult = bfs(visited, maps, [startX, startY], [leverX, leverY]);
    const visited2 = Array.from(Array(maps.length), () =>
        new Array(maps[0].length).fill(0)
    );
    const endResult = bfs(visited2, maps, [leverX, leverY], [endX, endY]);
    if (leverResult === -1 || endResult === -1) return -1;
    return leverResult + endResult;
}
