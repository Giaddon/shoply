import { add, remove } from "./actions";

describe("#add", () => {
  it("Creates the correct action", () => {
    expect(add("test")).toEqual({type: "ADD", id: "test"});
  })
})

describe("#remove", () => {
  it("Creates the correct action", () => {
    expect(remove("test")).toEqual({type: "REMOVE", id: "test"});
  })
})