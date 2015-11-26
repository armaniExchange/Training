console.log('start1');
import {detectCats}  from './mod2';//OK
console.log('start2');
import Kittydar  from './mod2'; //bad
console.log('start3');
//import {detectCats, Kittydar}  from './mod2'; //OK
console.log('start4');


console.log('typeof detectCats', typeof detectCats);
console.log('typeof Kittydar', typeof Kittydar);
