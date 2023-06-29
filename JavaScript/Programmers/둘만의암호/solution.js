function solution(s, skip, index) {
    let answer = "";

    const skipList = skip.split("");
    const alphabetList = Array.from({ length: 26 }, (v, i) =>
        String.fromCharCode(i + 97)
    ).filter((v) => !skipList.includes(v));

    const arr = s.split("").map((v) => {
        const idx = alphabetList.findIndex((alphabet) => alphabet === v);
        if (idx + index >= alphabetList.length)
            return alphabetList[(idx + index) % alphabetList.length];
        return alphabetList[idx + index];
    });
    // console.log(arr.join(""));
    return arr.join("");
}

solution("aukks", "wbqd", 5);
