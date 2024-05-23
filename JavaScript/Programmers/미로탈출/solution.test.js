import solution from "./solution.js";
import { testcase1, testcase2, answer1, answer2 } from "./testcase.js";

describe("미로 탈출", () => {
    test("test1", () => {
        expect(solution(testcase1)).toBe(answer1);
    });

    test("test2", () => {
        expect(solution(testcase2)).toBe(answer2);
    });
});
