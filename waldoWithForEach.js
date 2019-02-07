var index = 0;

function findWaldo(arr, found) {
    arr. forEach(function(element){
        if(element === "Waldo"){
            index = arr.indexOf(element);
            found (index); // execute callback
        }
    });
}
  
function actionWhenFound() {
console.log("Found him at index " + index + "!");
}
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);