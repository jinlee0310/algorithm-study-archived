export const testcase1 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["fr*d*", "abc1**"],
};
export const answer1 = 2;
export const testcase2 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["*rodo", "*rodo", "******"],
};
export const answer2 = 2;
export const testcase3 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["fr*d*", "*rodo", "******", "******"],
};
export const answer3 = 3;
