// var array = [10, 2, 5, 1, 9];

// array.sort(function(a, b){
//     return a - b;
// });
// console.log(array);


var students = [
    { id: 1, name: "alex",    age: 40 },
    { id: 2, name: "alex", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

console.log(students.sort(function(a, b){
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    var ageA = a.age;
    var ageB = b.age;
    if (nameA < nameB){
        return -1;
    }
    if (nameA > nameB){
        return 1;
    }
    if (nameA = nameB){
        if (ageA < ageB){
            return 1;
        }
        if (ageA > ageB){
            return -1;
        }
        return 0;
    }
}));