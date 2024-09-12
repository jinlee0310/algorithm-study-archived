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
  const number = Number(input);
  if (number === 0) return 1;
  else {
    let answer = 1;
    for (let i = 1; i <= number; i++) {
      answer *= i;
    }
    return answer;
  }
};

console.log(solution(input));
