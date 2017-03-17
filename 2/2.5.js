function sum(num) {
  var result = num;
  return function internal(num1) {
    if (typeof num1 === 'undefined') {
      return result;
    }
    result = result + num1;
    return internal;
  }
}


console.log(sum(1)(2)(3)());
