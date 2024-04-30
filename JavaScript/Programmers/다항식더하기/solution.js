function solution(polynomial) {
    const arr = polynomial.split(" + ");
    let coefficient = 0;
    let constant = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("x")) {
            const tempArr = arr[i].split("x").filter((v) => v !== "");
            console.log(tempArr);
            if (tempArr.length === 0) {
                coefficient += 1;
            } else {
                coefficient += Number(tempArr[0]);
            }
        } else {
            constant += Number(arr[i]);
        }
    }
    if (coefficient === 1 && constant !== 0) {
        return `x + ${constant}`;
    } else if (coefficient === 1 && constant === 0) {
        return "x";
    } else if (coefficient !== 0 && constant !== 0) {
        return `${coefficient}x + ${constant}`;
    } else if (coefficient === 0 && constant !== 0) {
        return `${constant}`;
    } else if (coefficient !== 0 && constant === 0) {
        return `${coefficient}x`;
    } else {
        return "0";
    }
}
