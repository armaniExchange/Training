//default valeu
var [missing = true] = [];
console.log(missing); // true

var { message: msg = "Something went wrong" } = {};
console.log(msg); // "Something went wrong"

var { x = 3 } = {};
console.log(x); // 3




function removeBreakpoint({ url, line=0, column }) {
  console.log('[ES6]url,line,column=', url, line, column);
}
removeBreakpoint({url:"http://xxxx", line:33, column:2});
removeBreakpoint({url:"http://xxxx"});

function removeBreakpointES5(config) {
  config = config || {};
  var url = config.url;
  var line = config.line || 0;
  var column = config.column;
  console.log('[ES5]url,line,column=', url, line, column);
}
removeBreakpointES5({url:"http://xxxx", line:33, column:2});
removeBreakpointES5({url:"http://xxxx"});



var myMap = new Map();//ES6 Map; NOT ImmutableJS Map
myMap.set('a', 'a1');
myMap.set('b', 'b2');
console.log('//key and value')
for(var [key,value] of myMap){console.log(key, value);}
console.log('//key only')
for(var [key] of myMap){console.log(key);}
console.log('//value only')
for(var [,value] of myMap){console.log(value);}


function returnMultipleValuesLikePythonTuple() {
  return [1, 2];
}
var [foo, bar] = returnMultipleValuesLikePythonTuple();
console.log('foo=',foo,'bar=',bar);

function returnMultipleValues() {
  return {
    foo: 'x',
    bar: 'y' 
  };
}
var { foo, bar } = returnMultipleValues();
console.log('foo=',foo,'bar=',bar);


//callback
function returnMultipleValues2(k) {
  k('On', 'WebEX');
}
returnMultipleValues2((foo, bar) => console.log('Mom, I am here!!', foo, bar) );


//const { SourceMapConsumer, SourceNode } = require("source-map");//talk it later on module section
