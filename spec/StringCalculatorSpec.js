describe("StringCalculator", function() {
  var StringCalculator = require('../lib/StringCalculator');
  var calculator = new StringCalculator();

  it("should be able to play a Song", function() {
    calculator.play(song);
    expect(calculator.currentlyPlayingSong).toEqual(song);
  });
});
