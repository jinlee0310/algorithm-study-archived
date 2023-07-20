function solution(board, moves) {
    let answer = 0;
    const stack = [];
    moves.map((move) => {
        let i = 0;
        while (board[i][move - 1] === 0) {
            if (i === board.length - 1) {
                break;
            }
            i++;
        }

        if (board[i][move - 1] !== 0) {
            if (stack.length === 0) {
                stack.push(board[i][move - 1]);
            } else {
                if (stack[stack.length - 1] === board[i][move - 1]) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(board[i][move - 1]);
                }
            }
        }
        board[i][move - 1] = 0;
    });
    console.log(answer);
    return answer;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
// [      4]

//4, 2,4
//2
// [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 5, 0, 0],
//     [0, 2, 4, 4, 2],
//     [0, 5, 1, 3, 1],
// ]
