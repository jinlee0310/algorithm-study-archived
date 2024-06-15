import { testcase1 } from "./testcase.js";

export default function solution(want, number, discount) {
    let answer = 0;
    for (let i = 0; i < discount.length; i++) {
        const slicedDiscount = discount.slice(i, i + 10);

        const obj = {};
        want.forEach((el) => {
            obj[el] = 0;
        });
        for (let j = 0; j < slicedDiscount.length; j++) {
            if (want.includes(slicedDiscount[j])) {
                obj[slicedDiscount[j]]++;
            }
        }
        const cntArr = Object.values(obj);
        if (
            Object.values(obj).filter((cnt, idx) => number[idx] === cnt)
                .length === number.length
        ) {
            answer++;
        }
    }
    return answer;
}

solution(testcase1.want, testcase1.number, testcase1.discount);
