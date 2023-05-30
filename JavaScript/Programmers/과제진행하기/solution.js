function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [name, time, spend] = plan;
      const [hour, minute] = time.split(":");
      const convertedTime = Number(hour) * 60 + Number(minute);

      return [name, convertedTime, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const first = queue.shift();
  let curTime = first[1];

  const stack = [first];

  while (queue.length) {
    const target = queue.shift();
    const [_name, time, _spend] = target;
    let timeDiff = time - curTime;
    curTime = time;

    while (stack.length && timeDiff > 0) {
      const latestPlan = stack.pop();
      const [lName, _lTime, lSpend] = latestPlan;

      if (lSpend <= timeDiff) {
        result.push(lName);
        timeDiff -= lSpend;
      } else {
        latestPlan[2] = lSpend - timeDiff;
        timeDiff = 0;
        stack.push(latestPlan);
      }
    }

    stack.push(target);
  }

  while (stack.length) {
    result.push(stack.pop()[0]);
  }

  return result;
}

describe("과제 진행하기", () => {
  test("test1", () => {
    expect(
      solution([
        ["korean", "11:40", "30"],
        ["english", "12:10", "20"],
        ["math", "12:30", "40"],
      ])
    ).toMatchObject(["korean", "english", "math"]);
  });

  test("test2", () => {
    expect(
      solution([
        ["science", "12:40", "50"],
        ["music", "12:20", "40"],
        ["history", "14:00", "30"],
        ["computer", "12:30", "100"],
      ])
    ).toMatchObject(["science", "history", "computer", "music"]);
  });

  test("test3", () => {
    expect(
      solution([
        ["aaa", "12:00", "20"],
        ["bbb", "12:10", "30"],
        ["ccc", "12:40", "10"],
      ])
    ).toMatchObject(["bbb", "ccc", "aaa"]);
  });
});
