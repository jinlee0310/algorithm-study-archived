function solution(id_list, report, k) {
  const answer = [];
  const count = {};
  const singo = {};
  id_list.forEach((item) => {
    count[item] = 0;
    singo[item] = [];
  });
  report.forEach((item) => {
    const [id1, id2] = item.split(" ");

    if (!singo[id1].includes(id2)) {
      singo[id1].push(id2);
      count[id2] += 1;
    }
  });
  // console.log(count)
  // console.log(singo)
  const stop = [];

  Object.keys(count).forEach((item) => {
    if (count[item] >= k) stop.push(item);
  });
  Object.keys(singo).forEach((item) => {
    let cnt = 0;
    stop.forEach((i) => {
      if (singo[item].includes(i)) cnt += 1;
    });
    answer.push(cnt);
  });

  return answer;
}
