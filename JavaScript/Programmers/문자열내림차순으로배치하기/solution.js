function solution(s) {
    const str = s
        .split("")
        .map((v) => v.charCodeAt())
        .sort((a, b) => b - a)
        .map((v) => String.fromCharCode(v))
        .join("");
    return str;
}
