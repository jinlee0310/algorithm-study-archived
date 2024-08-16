import solution from "./solution";
import {
    answer1,
    answer2,
    answer3,
    testcase1,
    testcase2,
    testcase3,
} from "./testcase";

describe("불량 사용자", () => {
    test("test1", () => {
        const { user_id, banned_id } = testcase1;
        expect(solution(user_id, banned_id)).toBe(answer1);
    });

    test("test2", () => {
        const { user_id, banned_id } = testcase2;
        expect(solution(user_id, banned_id)).toBe(answer2);
    });

    test("test3", () => {
        const { user_id, banned_id } = testcase3;
        expect(solution(user_id, banned_id)).toBe(answer3);
    });
});
