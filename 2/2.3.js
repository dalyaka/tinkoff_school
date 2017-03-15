var array = [[1,2], [3,4,5], [6]];

console.log(array.reduce((sum, next) => sum.concat(next), []));
