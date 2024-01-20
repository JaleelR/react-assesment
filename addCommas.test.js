const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("adds comma", () => {
    expect(addCommas(1234)).toEqual("1,234");
  });
  
  test("adds comma", () => {
    expect(addCommas(-984563)).toEqual("-984,563");
  });

  test("Doesnt work for letters", () => {
    expect(addCommas("fvfbbgb")).toBe("Must be a Number!");
  });


});
