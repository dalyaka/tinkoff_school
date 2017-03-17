console.log(toBinary(4));
console.log(toBinary(9));

function toBinary(n) {
  var sum = [];

  function internal(num) {
    if (num <= 1) {
      sum.push(num);
      return sum.reverse().join('');
    }
    sum.push(num % 2);
    return internal(Math.floor(num / 2));
  }
  return internal(n);
}
