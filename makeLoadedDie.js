function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var ind = 0;

  return function() {
    if (ind < list.length) {
      return list[ind++];
    } else {
      ind = 0;
      return list[ind++];
    }
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6