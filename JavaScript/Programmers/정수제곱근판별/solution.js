function solution(n) {
  for (let i = 0; i * i <= n; i++) {
    if (i * i === n) return (i + 1) * (i + 1);
  }
  return -1;
}

const answer = solution(121);

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  let i = 0;
  while (i * i <= n) {
    if (i * i === n) return Math.pow(i + 1, 2);
    i++;
  }
  return -1;
}
