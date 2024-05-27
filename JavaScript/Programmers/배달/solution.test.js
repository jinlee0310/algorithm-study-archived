import solution from "./solution";
import { answer1, answer2, testcase1, testcase2 } from "./testcase";

describe("배달", () => {
    test("test1", () => {
        expect(solution(testcase1.N, testcase1.road, testcase1.K)).toBe(
            answer1
        );
    });
    test("test2", () => {
        expect(solution(testcase2.N, testcase2.road, testcase2.K)).toBe(
            answer2
        );
    });
});
