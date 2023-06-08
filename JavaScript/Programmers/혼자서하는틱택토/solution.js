function isFinished(board, sign) {
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      if (i === 0 && j === 0) {
        if (
          sign === board[j][i] &&
          sign === board[j + 1][i] &&
          sign === board[j + 2][i]
        )
          return true;
        if (
          sign === board[j][i] &&
          sign === board[j][i + 1] &&
          sign === board[j][i + 2]
        )
          return true;
        if (
          sign === board[j][i] &&
          sign === board[j + 1][i + 1] &&
          sign === board[j + 2][i + 2]
        )
          return true;
      } else if (j === 0 && i === 1) {
        if (
          sign === board[j][i] &&
          sign === board[j + 1][i] &&
          sign === board[j + 2][i]
        )
          return true;
      } else if (j === 0 && i === 2) {
        if (
          sign === board[j][i] &&
          sign === board[j + 1][i] &&
          sign === board[j + 2][i]
        )
          return true;
        if (
          sign === board[j][i] &&
          sign === board[j + 1][i - 1] &&
          sign === board[j + 2][i - 2]
        )
          return true;
      } else if (j === 1 && i === 0) {
        if (
          sign === board[j][i] &&
          sign === board[j][i + 1] &&
          sign === board[j][i + 2]
        )
          return true;
      } else if (j === 2 && i === 0) {
        if (
          sign === board[j][i] &&
          sign === board[j][i + 1] &&
          sign === board[j][i + 2]
        )
          return true;
      }
    }
  }
  return false;
}

function countingSign(board, sign) {
  let cnt = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      if (board[j][i] === sign) cnt += 1;
    }
  }
  return cnt;
}

function solution(board) {
  const _board = board.map((v) => v.split(""));
  //   console.log(_board);
  const isOVictory = isFinished(_board, "O");
  const isXVictory = isFinished(_board, "X");
  //   const isXVictory = false;
  //   console.log(isOVictory, isXVictory);

  const cntO = countingSign(_board, "O");
  const cntX = countingSign(_board, "X");
  //   console.log(cntO, cntX);

  if (cntO === 0 && cntX === 0) return 1;
  if (cntO < cntX) return 0;
  if (!isOVictory && !isXVictory) {
    if (cntO === cntX || cntO === cntX + 1) return 1;
  }
  if (isOVictory && isXVictory) return 0;
  if (isOVictory && !isXVictory) {
    if (cntO === cntX + 1) return 1;
  }
  if (isXVictory && !isOVictory) {
    if (cntO === cntX) return 1;
  }
  return 0;
}

const answer = solution(["XX.", "OOO", "OOO"]);
console.log(answer);
