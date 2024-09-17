const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "/input.txt"),
  )
  .toString()
  .trim()
  .split("\n");

const hasSameColor = (paper) => {
  const num = paper[0][0];
  for (let i = 0; i < paper.length; i++) {
    for (let j = 0; j < paper.length; j++) {
      if (paper[j][i] !== num) return false;
    }
  }
  return true;
};

const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1].split(" ").map((v) => Number(v));
  const max = Math.max(...arr);

  let st = 0;
  en = max;
  while (st < en) {}
};

solution(input);
