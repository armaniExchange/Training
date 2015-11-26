// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator


var iterableObj = [1,2,3,4];
var iterableObj2 = [iterableObj, 'a', 'b', 'c'];
var iterableObj3 = ['a', 'b',iterableObj, 'c'];
console.log(iterableObj2);
console.log(iterableObj3);

function myFunction(x, y, z) { console.log('myFunction:', x, y, z); }
var args = [0, 1, 2];
myFunction(...args);
myFunction(...['a', 'b', 'c']);

function myFunction2(v, w, x, y, z) { console.log('myFunction2:', v,w,x,y,z) }
var args = [0, 1];
myFunction2(-1, ...args, 2, ...[3]);