function StringCalculator() {};

StringCalculator.prototype.add = function(value) {
  if(value === ""){
    return 0;
  } else {
    return parseInt(value);
  };
}

module.exports = StringCalculator;
