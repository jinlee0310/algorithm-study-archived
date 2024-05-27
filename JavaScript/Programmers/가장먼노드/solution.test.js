import solution from "./solution";
import { answer1, testcase1 } from "./testcase";

describe("가장 먼 노드", () => {
    test("test1", () => {
        expect(solution(testcase1.n, testcase1.vertex)).toBe(answer1);
    });
});
