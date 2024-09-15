const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "/input.txt"),
  )
  .toString()
  .split("\n");

// 5번일 때 벽 위치
const getScope = (board, position) => {
  const [x, y] = position;
  const coordsVerti = [];
  const coordsHori = [];
  let sX = 0,
    eX = board[0].length - 1,
    sY = 0,
    eY = board.length - 1;
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 6) {
        if (i === x) {
          if (j < y) sY = Math.max(sY, j);
          else if (j > y) eY = Math.min(eY, j);
        }
        if (j === y) {
          if (i < x) sX = Math.max(sX, i);
          else if (i > x) eX = Math.min(eX, i);
        }
      }
    }
  }

  return [sX, eX, sY, eY];
};

const cctv5 = (board, position) => {
  const [x, y] = position;
  const [sX, eX, sY, eY] = getScope(board, position);

  for (let j = sY; j <= eY; j++) {
    for (let i = sX; i <= eX; i++) {
      if (board[j][i] === 0) {
        if (i === x) {
          board[j][i] = "#";
        }
        if (j === y) {
          board[j][i] = "#";
        }
      }
    }
  }
};

const cctv4 = (board, position) => {
  const [x, y] = position;
  const [sX, eX, sY, eY] = getScope(board, position);
  const cnt = [[], [], [], []]; // 위부터 시계방향
  for (let j = sY; j <= eY; j++) {
    for (let i = sX; i <= eX; i++) {
      if (board[j][i] === 0) {
        if (i === x && j < y) cnt[0].push([i, j]);
        if (i === x && j > y) cnt[2].push([i, j]);
        if (j === y && i < x) cnt[3].push([i, j]);
        if (j === y && i > x) cnt[1].push([i, j]);
      }
    }
  }
  const minLength = Math.min(...cnt.map((v) => v.length));
  cnt
    .filter((v) => v.length > minLength)
    .forEach((v) => {
      v.forEach(([x, y]) => (board[y][x] = "#"));
    });
};

const cctv3 = (board, position) => {
  const [x, y] = position;
  const [sX, eX, sY, eY] = getScope(board, position);
  const cnt = [[], [], [], []]; // 위부터 시계방향
  for (let j = sY; j <= eY; j++) {
    for (let i = sX; i <= eX; i++) {
      if (board[j][i] === 0) {
        if (i === x && j < y) {
          // 위라인
          cnt[0].push([i, j]);
          cnt[3].push([i, j]);
        }
        if (i === x && j > y) {
          // 아래라인
          cnt[1].push([i, j]);
          cnt[2].push([i, j]);
        }
        if (j === y && i < x) {
          // 왼쪽라인
          cnt[2].push([i, j]);
          cnt[3].push([i, j]);
        }
        if (j === y && i > x) {
          // 오른쪽라인
          cnt[0].push([i, j]);
          cnt[1].push([i, j]);
        }
      }
    }
  }
  const maxLength = Math.max(...cnt.map((v) => v.length));
  cnt
    .filter((v) => v.length === maxLength)[0]
    .forEach(([x, y]) => (board[y][x] = "#"));
};

const cctv2 = (board, position) => {
  const [x, y] = position;
  const [sX, eX, sY, eY] = getScope(board, position);
  const cnt = [[], []]; // 위부터 시계방향
  for (let j = sY; j <= eY; j++) {
    for (let i = sX; i <= eX; i++) {
      if (board[j][i] === 0) {
        if (i === x && j < y) {
          // 위라인
          cnt[0].push([i, j]);
        }
        if (i === x && j > y) {
          // 아래라인
          cnt[0].push([i, j]);
        }
        if (j === y && i < x) {
          // 왼쪽라인
          cnt[1].push([i, j]);
        }
        if (j === y && i > x) {
          // 오른쪽라인
          cnt[1].push([i, j]);
        }
      }
    }
  }
  const maxLength = Math.max(...cnt.map((v) => v.length));
  cnt
    .filter((v) => v.length === maxLength)[0]
    .forEach(([x, y]) => (board[y][x] = "#"));
};

const cctv1 = (board, position) => {
  const [x, y] = position;
  const [sX, eX, sY, eY] = getScope(board, position);
  const cnt = [[], [], [], []]; // 위부터 시계방향
  for (let j = sY; j <= eY; j++) {
    for (let i = sX; i <= eX; i++) {
      if (board[j][i] === 0) {
        if (i === x && j < y) {
          // 위라인
          cnt[0].push([i, j]);
        }
        if (i === x && j > y) {
          // 아래라인
          cnt[2].push([i, j]);
        }
        if (j === y && i < x) {
          // 왼쪽라인
          cnt[3].push([i, j]);
        }
        if (j === y && i > x) {
          // 오른쪽라인
          cnt[1].push([i, j]);
        }
      }
    }
  }
  const maxLength = Math.max(...cnt.map((v) => v.length));
  cnt
    .filter((v) => v.length === maxLength)[0]
    .forEach(([x, y]) => (board[y][x] = "#"));
};
const solution = (input) => {
  // 1번부터 해서 방향을 다 돌려본 뒤 사각지대의 최소를 구해야 하는건가??
  // 진짜 개변태같다
  // 거꾸로 하는게 더 낫겠지
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const board = [];
  for (let i = 1; i < input.length; i++) {
    board.push(input[i].split(" ").map((v) => Number(v)));
  }
  // console.log(board);
  // 5번부터 순서대로 board를 업데이트
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 5) {
        cctv5(board, [i, j]);
      }
    }
  }
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 4) {
        cctv4(board, [i, j]);
      }
    }
  }
  console.log(board);
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 3) {
        cctv3(board, [i, j]);
      }
    }
  }
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 2) {
        cctv2(board, [i, j]);
      }
    }
  }
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 1) {
        cctv1(board, [i, j]);
      }
    }
  }
  console.log(board);
  let cnt = 0;
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === 0) cnt++;
    }
  }
  return cnt;
};

console.log(solution(input));
