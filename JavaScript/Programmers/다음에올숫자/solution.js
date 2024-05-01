function solution(common) {
    const lastIdx = common.length - 1;
    if (
        common[lastIdx] - common[lastIdx - 1] !==
        common[lastIdx - 1] - common[lastIdx - 2]
    ) {
        return (common[lastIdx] / common[lastIdx - 1]) * common[lastIdx];
    } else {
        return common[lastIdx] + common[lastIdx] - common[lastIdx - 1];
    }
}
