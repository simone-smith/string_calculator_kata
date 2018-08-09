describe("StringCalculator", function() {
  var StringCalculator = require('../lib/StringCalculator');
  var calculator = new StringCalculator();

  it("returns 0 for an empty string", function() {
    expect(calculator.add("")).toEqual(0);
  });

  it("when given one number as a string, it returns that number as an integer", function() {
    expect(calculator.add("1")).toEqual(1);
  });

  it("when given two numbers as a string, it returns the sum of the numbers as an integer", function() {
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("can take an unknown amount of numbers", function() {
    expect(calculator.add("1,2,3,4")).toEqual(10);
  });

  it("can handle new lines between numbers", function() {
    expect(calculator.add("1\n2,3")).toEqual(6);
  });
});
