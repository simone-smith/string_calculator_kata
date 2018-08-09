describe("StringCalculator", function() {
  var StringCalculator = require('../lib/StringCalculator');
  var calculator = new StringCalculator();

  it("returns 0 for an empty string", function() {
    expect(calculator.add("")).toEqual(0);
  });

  it("when given one number as a string, it returns that number as an integer", function() {
    expect(calculator.add("1")).toEqual(1);
  });
});
