import { myFun } from "../index";
import { asyncFun } from "../index";

/// suite
// describe("suite description", () => {
//   // spec
//   it("describes the spec", () => {
//     const myVar = true;
//     expect(myVar).toBe(true);
//   });
// });

// describe("math functions in index", () => {
//   // spec
//   it("expect myFun(5) to equal 25", () => {
//     // expect(myFun(5)).toEqual(25);

//     // expect(44.5).toBeCloseTo(45, 1);

//     expect([1, 2, "s"]).toEqual([1, 2, "s"]);

//   });
// });

describe("test async function", () => {
  // using async await
  it("test async await ", async () => {
    const result = await asyncFun();
    expect(result).toEqual("value");
  });

  //
  it("test with promise ", () => {
    return  asyncFun().then(result => {return expect(result).toEqual('value')})
  });

  // end of describe
});
/// test promises 
/*
.toBeResolved() tests if a promise is resolved and will return true if the promise is resolved
.toBeRejected() tests if a promise is rejected and will return true if the promise is rejected
.toBeRejectedWith(expected value) tests if the expected error is returned

*/