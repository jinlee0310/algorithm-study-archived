import solution from "./solution";
import { answer1, answer2, testcase1, testcase2 } from "./testcase";

describe("예산", () => {
    test("test1", () => {
        expect(solution(testcase1.d, testcase1.budget)).toBe(answer1);
    });

    test("test2", () => {
        expect(solution(testcase2.d, testcase2.budget)).toBe(answer2);
    });
});
