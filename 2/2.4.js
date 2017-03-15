function bind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
}

function exampleFunction() {
  console.log(this.name);
  console.log(arguments);
}

bind(exampleFunction, {name: 'qweqwe'})('arg1', 'arg2');
