//http://es6.ruanyifeng.com/#docs/let

/*
{
  var i=1;
  var f1 = function(){
    console.log(i);
  }
}
{
  var i=2;
  var f2 = function(){
    console.log(i);
  }
}
f1();//2
*/

if(true){
  let a = 10;
  var b = 1;
}

var b;
if(true){
  let a= 10;
  b=1;
}
//console.log('a='+a); // ReferenceError: a is not defined.
console.log('b='+b); // 1


var arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < arr.length; i++){
}
//console.log(i); //ReferenceError: i is not defined

var i;
for(i = 0; i < arr.length; i++){
}
console.log('i='+i); //i=10


var a = [];
var i;
for (i = 0; i < 10; i++) { //sharing i memory
  a[i] = function () {
    console.log('(part2) i='+i);
  };
}
a[6](); // 10
a[5]();
a[4]();


var a = [];
for (let i = 0; i < 10; i++) { //every i is `new` memory
  a[i] = function () {
    console.log('(part2b) i='+i);
  };
}
a[6](); // 6
a[5](); 
a[4]();

console.log(typeof notfoundme);


var tmp1;
if(true){
  console.log('tmp', tmp); //<---still 变量提升??
  console.log('tmp1', tmp1);
  let tmp = 2;
  tmp1= 2;
}
console.log('------->', tmp1)

if(true){
  //console.log(t); //open me to know hoist not work
  console.log('t1', t1);
  if(false){ let t = 2; }
  if(false){ var t1= 2; }
}

/////////////

if(false){
  let s = 's';
  var s2 = 's2';
}
//console.log('s', s);//open me to know `let` will be limited by block.
console.log('s2', s2);
