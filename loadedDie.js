function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var i = 0;
            return function() {
                var item = list[i];
                i = i + 1;   
                return item;
            }
    }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6