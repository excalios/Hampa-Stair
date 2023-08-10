import { stair } from "./main";

describe("Upside down stair function", () => {
  it("should pass when given a proper number", () => {
    const result = [
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", "*"],
      [" ", " ", "*", "*", "*"],
      [" ", " ", " ", "*", "*"],
      [" ", " ", " ", " ", "*"],
    ];
    expect(stair(5)).toMatchObject(result);
  });

  it("should not return anything when given a 0", () => {
    const result = [];
    expect(stair(0)).toMatchObject(result);
  });

  it("should not return anything when give a negative number", () => {
    const result = [];
    expect(stair(-5)).toMatchObject(result);
  });
});
