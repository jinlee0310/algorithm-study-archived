const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "/input.txt"),
  )
  .toString()
  .trim();

const solution = (input) => {
  const [A, B] = input.split(" ").map((v) => Number(v));
  if (A > B) return ">";
  else if (A < B) return "<";
  else return "==";
};

console.log(solution(input));
