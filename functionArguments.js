function SumArgs () {
  var r = 0;
  for (var i = 0; i < arguments.length; i++) {
    r += arguments[i];
    return r;
  }
}

console.log(SumArgs(1, 2, 93));
