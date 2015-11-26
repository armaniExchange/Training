//https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/

var myArray = ['a','b','c']
for (var index = 0; index < myArray.length; index++) { //traditional
  console.log(myArray[index]);
}
console.log('-------');
myArray.forEach(function (value) { //alittle smart
  console.log(value);
});
console.log('-------');

// for (var index in myArray) {    // !!!!don't actually do this
//   console.log(myArray[index]);
// }

//
// NOW, World is changed via ES6!
//
for(var val of myArray){ //more handsome&beauty way
  //if (val=='b') {break;}
  // if (val=='c') {break;}
  console.log('val='+val);
  console.log('go next, yo');
}
console.log();
console.log();
console.log();
for(var chr of "xyz"){ console.log('chr =', chr); }

var mySet = new Set("mnkmnst");
for(var s of mySet){ console.log('s=', s); }

var myMap = new Map();
myMap.set('a', 'a1');
myMap.set('b', 'b1');
myMap.set('c', 'c1');
for(var [key, val] of myMap){ console.log('key, val:', key, val); }


var ImissingES5hash = {x:'x1', y:'y2', z:'z3'}; 
for (var key of Object.keys(ImissingES5hash)) { //alittle not directly
  console.log(key + ": " + ImissingES5hash[key]);
}
// for (var key of ImissingES5hash) { //Error!!!!!!!!
//   console.log(key);
// }
for (var key in ImissingES5hash) {
  console.log(key + ": " + ImissingES5hash[key]);
}




