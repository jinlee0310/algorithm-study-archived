import solution from "./solution.js";
import { testcase2, testcase1, answer1, answer2 } from "./testcase.js";

describe("할인 행사", () => {
    test("test1", () => {
        expect(
            solution(testcase1.want, testcase1.number, testcase1.discount)
        ).toBe(answer1);
    });

    test("test2", () => {
        expect(
            solution(testcase2.want, testcase2.number, testcase2.discount)
        ).toBe(answer2);
    });
});
