const solution = (word) => {
  let cnt = 0;
  const res = [];
  const dfs = (s, wList, word, res) => {
    if (s.length === 5) return;
    for (let i = 0; i < wList.length; i++) {
      cnt++;
      let p;
      p = s + wList[i];
      if (p === word) {
        res.push(cnt);
        return;
      }
      dfs(p, wList, word, res);
    }
  };
  dfs("", ["A", "E", "I", "O", "U"], word, res);
  return res[0];
};

solution("I");
