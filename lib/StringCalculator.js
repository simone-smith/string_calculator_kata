function StringCalculator() {};

StringCalculator.prototype.add = function(value) {
  var nums = value.split(/[\n,]+/);
  var sum = 0;
  for(var i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i] || 0)
  }
  return sum;
}

module.exports = StringCalculator;
