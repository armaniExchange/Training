
var someArray  = [1,2,3,4,5,6,7];
let [first, second, third] = someArray;
console.log(first, second, third);

first = 1111;


console.log('-----------');
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);// 1
console.log(bar);// 2
console.log(baz);// 3
console.log('===========');

var [,,z] = ["foo", "bar", "baz"];
console.log(z);//"baz"

console.log('===========');
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail); //tail is just a variable name


var a = [undefined, undefined, undefined, undefined];
var a2 = [,,,undefined]
var b = [,,,]
console.log('a.length='+a.length);
console.log('a2.length='+a2.length);
console.log('b.length='+b.length);


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo); // "lorem"
console.log(bar); // "ipsum"

var { foo2:foo2, bar2:alias2 } = { foo2: "lorem2", bar2: "ipsum2" };
console.log('alias2='+alias2);
console.log('foo2='+foo2);
// console.log('bar2 is....');console.log(bar2);


var complicatedObj = {
  arrayProp: [
    "Zapp",
    { two: "Brannigan" }
  ]
};

var { arrayProp: [one, {two}] } = complicatedObj;
console.log(one); // "Zapp"
console.log(two); // "Brannigan"

var { last } = { last: 10 };
console.log('last='+last);

var last0;
({ last0 } = { last0: 10 }); //safe between ( and )
console.log('last0='+last0);
