// countdownGenerator.js

// takes in a number x and returns a function that counts down when it is called


function makeOrderedArray(n){
  var foo = [];
  for (var i = 1; i < n+1; i++) {
   foo.push(i);
  }
  return foo;
}

var countdownGenerator = function (x) {
  var seconds = makeOrderedArray(x);
  var ind = 0;

  return function() {
    if (ind < seconds.length) {
      console.log('T-minus' + seconds[ind++] + '...');
    }
    if (ind === seconds.length){
      console.log('Blast Off!');
      ind += 1;
    }
    if (ind > seconds.length) {
      console.log('Rockets already gone, bub!');
    }
  }

}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!