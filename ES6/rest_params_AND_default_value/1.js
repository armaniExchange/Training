//ES5
function containsAll(haystack) {
  // console.log('arguments', arguments);
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i];
    // console.log('needle=', needle);
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}
console.log('containsAll for 1,2,5:', containsAll([1,2,3,4], 1,2,5));
console.log('containsAll for 1,2,4:', containsAll([1,2,3,4], 1,2,4));
console.log();
console.log();

//ES6
function containsAllES6(haystack, ...needles) { //...rest
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}
console.log('ES6 part1:', containsAllES6([1,2,3,4], 1,2,5));
console.log('ES6 part2:', containsAllES6([1,2,3,4], 4,1,2));

//default value DEMO
function fn(a="a1", b="b2"){
  console.log('------>', a, b);
}
fn();
fn("zz");
fn("zz", "yy");


function fn2(a="a1", b="b2", c=(a==="A") ? "C3" : "cc", d="d4"){
  console.log('==========>','a='+a, 'b='+b, 'c='+c, 'd='+d);
}
fn2();
fn2("a1");
fn2("A", "");
fn2("A", undefined, "myc");

function fn3(param1, param2="2", param3){ // param3 become optional, yo~
  console.log('~~~~~~>', param1, param2, param3);
}
//fn();//Error!!!
fn3(1);//mini-call
