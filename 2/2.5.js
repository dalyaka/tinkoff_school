function sum(num, result = 0) {
  if (!num) return result;
  result = result + num;
  return function(num1) {
    return sum.call(null, num1, result);
  }
}


console.log(sum(1)(2)(3)());
