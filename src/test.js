const { unique } = require("./index");
const { expect } = require("chai");

describe("tiny-unique", () => {
  it("should return an empty array for non-iterable arguments", () => {
    expect(unique(4)).to.deep.equal([]);
    expect(unique(NaN)).to.deep.equal([]);
    expect(unique(null)).to.deep.equal([]);
    expect(unique(undefined)).to.deep.equal([]);
    expect(unique(true)).to.deep.equal([]);
    expect(unique(false)).to.deep.equal([]);
    expect(unique({})).to.deep.equal([]);
  });

  it("should return a copy of an already unique array", () => {
    const uniqueArray = [1, 2, 3];
    expect(unique(uniqueArray)).not.to.equal(uniqueArray);
    expect(unique(uniqueArray)).to.deep.equal(uniqueArray);
  });

  it("should return an array with only the unique values", () => {
    const input = [
      1,
      "bar",
      NaN,
      NaN,
      "bar",
      2,
      1,
      true,
      false,
      false,
      "foo",
      [1, 2, 3],
      {},
      {},
      [1, 2, 3]
    ];
    const output = [
      1,
      "bar",
      NaN,
      NaN,
      2,
      true,
      false,
      "foo",
      [1, 2, 3],
      {},
      {},
      [1, 2, 3]
    ];
    expect(unique(input)).to.deep.equal(output);
  });
});
