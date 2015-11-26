var _ = require('lodash');

function fn1(){
  return a => a>0; // means: return function(a){ return a>0; }
}
let fn1a = fn1();
console.log('fn1a(-1)', fn1a(-1));
console.log('fn1a(1)', fn1a(1));

function fn2(){
  return a => { a>0 };
}
let fn2a = fn2();
console.log('fn2a(-1)', fn2a(-1));
console.log('fn2a(1)', fn2a(1));

function fn3(){
  return a => { return a>0 };
}
let fn3a = fn3();
console.log('fn3a(-1)', fn3a(-1));
console.log('fn3a(1)', fn3a(1));

console.log('-------end1-------');

/*
function es5es6funcDemo(){
  this.a = 'aaa';

  console.log('es5es6funcDemo', this.a);
  var es5 = function(){
    console.log(this.a);
  }
  let es6 = () => console.log(this.a, typeof this.a)
  es5();
  es6();
}*/
//new es5es6funcDemo();

/*
function thisDemo(){
  console.log('this.key1=', this.key1);
}
var o = {key1:'key1value'};
thisDemo.apply(o);
var tmpThisDemo = thisDemo.bind(o);
tmpThisDemo();


var obj = {
  obj_x: 81,
  es5: function(){console.log(this.obj_x);},
  es6: () => obj_x
};

obj.es6();
*/

//https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
var obj = {
  pieces: [],
  add: function(item){
    this.pieces.push(item);
  },
  addAll: function addAll(pieces){
    //we don't need hack `this`.
    _.each(pieces, item => this.add(item));
  },
  addAllES5: function addAll(pieces){
    var self = this;//we need hack `this`.
    _.each(pieces, function(item){
      self.add(item);
    });
  }
};
console.log(obj.pieces);
obj.addAll([1,2,3]);
console.log(obj.pieces);
obj.addAllES5(['a','b','c']);
console.log(obj.pieces);
