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
  const n = Number(input[0]);
  for (let i = 0; i < n; i++) {}
};

solution(input);
