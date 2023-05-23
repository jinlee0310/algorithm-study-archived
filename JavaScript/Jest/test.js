test("1 is 1", () => {
  //설명
  expect(1).toBe(1);
});

const func = (a, b) => {
  return a + b;
};

test("a+b", () => {
  expect(func(1, 2)).toBe(3);
});

describe("test cases", () => {
  test("test1", () => {
    expect(func(1, 2)).toBe(3);
  });
  test("test2", () => {
    expect(func(1, 3)).toBe(4);
  });
  test("test3", () => {
    expect(func(2, 3)).toBe(5);
  });
});
