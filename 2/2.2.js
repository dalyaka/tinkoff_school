
console.log(intersect([1, 3, 5, 7, 9], [1, 2, 3, 4]));

function intersect(a, b) {
    var newObj = {};
    a.forEach(item => newObj[item] = true);
    return b.filter(item => newObj[item]);
}
