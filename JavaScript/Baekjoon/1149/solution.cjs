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

const solution = (input) => {
  const cnt = Number(input[0]);
  const arr = [];
  for (let i = 1; i <= cnt; i++) {
    arr.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dp = Array.from({ length: cnt }, () => new Array(3).fill(0));
  dp[0][0] = arr[0][0];
  dp[0][1] = arr[0][1];
  dp[0][2] = arr[0][2];

  for (let i = 1; i < cnt; i++) {
    for (let j = 0; j <= 2; j++) {
      const temp = [...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1)];
      dp[i][j] = Math.min(...temp) + arr[i][j];
    }
  }
  // console.log(dp);
  return Math.min(...dp[dp.length - 1]);
};

const answer = solution(input);
console.log(answer);
