console.log('start1');
import {detectCats}  from './mod3';//OK
console.log('start2');
import {Kittydar}  from './mod3'; //
import {CONST_ME}  from './mod3'; //
console.log('start3');
import {detectCats, Kittydar, CONST_ME}  from './mod2'; //OK
console.log('start4');


console.log('typeof detectCats', typeof detectCats);
console.log('typeof Kittydar', typeof Kittydar);
console.log('typeof CONST_ME', typeof CONST_ME);
