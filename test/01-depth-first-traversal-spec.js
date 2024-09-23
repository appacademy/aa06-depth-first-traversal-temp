const chai = require("chai");
const expect = chai.expect;
const printDepthFirst = require("../problems/01-depth-first-traversal");

describe("printDepthFirst", function () {
  let consoleLog;
  let consoleLogArgs;
  beforeEach(() => {
    consoleLog = console.log;
    consoleLogArgs = [];
    console.log = (...args) => {
      consoleLog(...args);
      consoleLogArgs.push(args);
    };
  });

  afterEach(() => {
    console.log = consoleLog;
  });

  it("printDepthFirst(3) prints a depth first traversal from 3", () => {
    printDepthFirst(3);
    expect(consoleLogArgs).to.be.deep.oneOf([
      [[3], [2], [1], [5], [4], [6]],
      [[3], [4], [5], [1], [2], [6]],
      [[3], [4], [5], [2], [1], [6]],
      [[3], [4], [6], [5], [1], [2]],
      [[3], [4], [6], [5], [2], [1]],
      [[3], [2], [5], [1], [4], [6]],
      [[3], [2], [5], [4], [6], [1]],
    ]);
  });

  it("printDepthFirst(6) prints a depth first traversal from 6", () => {
    printDepthFirst(6);
    expect(consoleLogArgs).to.be.deep.oneOf([
      [[6], [4], [3], [2], [1], [5]],
      [[6], [4], [5], [1], [2], [3]],
      [[6], [4], [5], [2], [1], [3]],
      [[6], [4], [5], [2], [3], [1]],
      [[6], [4], [3], [2], [5], [1]],
    ]);
  });

  it("printDepthFirst(4) prints a depth first traversal from 4", () => {
    printDepthFirst(4);
    expect(consoleLogArgs).to.be.deep.oneOf([
      [[4], [3], [2], [1], [5], [6]],
      [[4], [5], [1], [2], [3], [6]],
      [[4], [5], [2], [1], [3], [6]],
      [[4], [6], [3], [2], [1], [5]],
      [[4], [6], [5], [1], [2], [3]],
      [[4], [6], [5], [2], [1], [3]],
      [[4], [5], [2], [3], [1], [6]],
      [[4], [6], [5], [2], [3], [1]],
      [[4], [3], [2], [5], [1], [6]],
      [[4], [6], [3], [2], [5], [1]],
    ]);
  });
});
