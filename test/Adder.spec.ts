/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from "chai";
import { Adder } from "../src/Adder";

describe("Adder", () => {
  it("Can add", () => {
    expect(Adder.add(1, 2)).to.equal(3);
  });
});
