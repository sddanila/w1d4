function myFilter (list, cb){
    try {
        if (typeof cb !== 'function') throw { message: 'Your 2nd argument should be a function!'}
        var resultArray = [];
        for ( var i = 0; i < list.length; i++){
            if(cb(list[i])){
                resultArray.push(list[i]);
            };
        }
        return resultArray;
    } catch(error) {
        console.log("STOP!!!",  error);
    }
}

var result = function(x){
    return (x % 3 === 0)
}


console.log(myFilter([1, 3, 5, 8, 9, 12, 13, 15, 17, 18], result));