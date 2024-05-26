import solution from "./solution";
import { answer1, answer2, testcase1, testcase2 } from "./testcase";

describe("명예의 전당(1)", () => {
    test("test1", () => {
        expect(solution(testcase1.k, testcase1.score)).toEqual(answer1);
    });

    test("test2", () => {
        expect(solution(testcase2.k, testcase2.score)).toEqual(answer2);
    });
});
