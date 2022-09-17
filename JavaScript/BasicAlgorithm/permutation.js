const permutation = (arr, num) => {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutaion) => [v, ...permutaion]);
    res.push(...attach);
  });
  return res;
};

const arr = permutation(
  [
    [80, 20],
    [50, 40],
    [30, 10],
  ],
  3
);
console.log(arr);
