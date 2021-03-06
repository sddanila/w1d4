var countdownGenerator = function (x) {
    var counter = x;
        return function (){
            var countKeep = counter + 3;
            counter--;
            if (countKeep > 3){
                return "T-minus " + (counter + 1);
            } else if (countKeep === 3){
                return "Blast off!";
            } else {
                return "Rockets already gone, bub!";
            }
        }
  };

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 3...

// countdown(); // T-minus 3...
// countdown(); // T-minus 2...
// countdown(); // T-minus 1...
// countdown(); // Blast Off!
// countdown(); // Rockets already gone, bub!
// countdown(); // Rockets already gone, bub!