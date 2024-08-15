import solution from "./solution.js";
import { testcase3 } from "./testcase.js";
import { answer3 } from "./testcase.js";
import { answer2 } from "./testcase.js";
import { testcase2 } from "./testcase.js";
import { testcase1, answer1 } from "./testcase.js";

describe("디펜스 게임", () => {
  test("test1", () => {
    expect(solution(testcase1.n, testcase1.k, testcase1.enemy)).toBe(answer1);
  });

  test("test2", () => {
    expect(solution(testcase2.n, testcase2.k, testcase2.enemy)).toBe(answer2);
  });

  test("test3", () => {
    expect(solution(testcase3.n, testcase3.k, testcase3.enemy)).toBe(answer3);
  });
});
