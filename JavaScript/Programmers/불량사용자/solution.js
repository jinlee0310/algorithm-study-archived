import { testcase1, testcase2, testcase3 } from "./testcase.js";

function getCombinations(arr) {
  const result = new Set();

  function helper(temp, index) {
    if (index === arr.length) {
      const tempSet = new Set(temp);
      if (tempSet.size === arr.length) {
        result.add(temp.sort().join());
      }
      return;
    }

    for (let i = 0; i < arr[index].length; i++) {
      helper([...temp, arr[index][i]], index + 1);
    }
  }

  helper([], 0);
  return result.size;
}

export default function solution(user_id, banned_id) {
  const banList = [];
  banned_id.forEach((id) => {
    const bans = [];
    user_id.forEach((userId) => {
      let cnt = 0;
      for (let i = 0; i < id.length; i++) {
        if (id[i] === "*" || id[i] === userId[i]) cnt++;
      }
      if (cnt === id.length && id.length === userId.length) bans.push(userId);
    });
    banList.push(bans);
  });

  return getCombinations(banList);
}

solution(testcase3.user_id, testcase3.banned_id);
