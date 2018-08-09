describe("StringCalculator", function() {
  var StringCalculator = require('../lib/StringCalculator');
  var calculator = new StringCalculator();

  it("returns 0 for an empty string", function() {
    expect(calculator.add("")).toEqual(0);
  });
});
