var words = ["ground", "control", "to", "major", "tom"];

function myMap(words, cb){
    var result = []; 
    for(var i = 0; i < words.length; i++){
        result.push(cb(words[i]));
    }
    return result
};



console.log(myMap(words, function(word) {
  return word.length;
}))

console.log (myMap(words, function(word) {
  return word.toUpperCase();
}))

console.log(myMap(words, function(word) {
  return word.split('').reverse().join('');
}))