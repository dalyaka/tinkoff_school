console.log(toBinary(4));
console.log(toBinary(9));

function toBinary(num, sum) {
  sum = sum || [];
  if (num <= 1) {
    sum.push(num);
    return sum.reverse().join('');
  }
  sum.push(num % 2);
  return toBinary(Math.floor(num / 2), sum);
}


console.log(toBinary2(4));
console.log(toBinary2(9));

// tail recursion to while
function toBinary2(num) {
  sum = [];
  while (num >= 1 ) {
    sum.push(num % 2);
    num = Math.floor(num / 2);
  }
  return sum.reverse().join('');
}
