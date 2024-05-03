function solution(files) {
    const arr = [];
    for (let i = 0; i < files.length; i++) {
        const idx = files[i].split("").findIndex((v) => /\d/.test(v));
        const head = files[i].slice(0, idx);
        let number = "",
            tail = "";
        for (let j = idx; j < files[i].length; j++) {
            if (!isNaN(Number(files[i][j]))) {
                number += files[i][j];
            } else {
                tail += files[i].slice(j);
                break;
            }
        }
        arr.push([head, number, tail]);
    }
    arr.sort(
        (a, b) =>
            a[0].toLowerCase().localeCompare(b[0].toLowerCase()) ||
            Number(a[1]) - Number(b[1])
    );
    console.log(arr);
    return arr.map((v) => v.join(""));
}
