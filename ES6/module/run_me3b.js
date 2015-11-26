console.log('start1');
import {detectCats as detectCats2}  from './mod3';//OK
console.log('start2');
import {Kittydar as Kittydar2} from './mod3'; //
import {CONST_ME as CONST_ME2} from './mod3'; //
console.log('start3');
import {
  detectCats as detectCats3, 
  Kittydar as Kittydar3, 
  CONST_ME as CONST_ME3
}  from './mod2'; //OK
console.log('start4');

console.log('-1-');
console.log('typeof detectCats', typeof detectCats);
console.log('typeof Kittydar', typeof Kittydar);
console.log('typeof CONST_ME', typeof CONST_ME);

console.log('-2-');
console.log('typeof detectCats2', typeof detectCats2);
console.log('typeof Kittydar2', typeof Kittydar2);//???
console.log('typeof CONST_ME2', typeof CONST_ME2);//???

console.log('-3-');
console.log('typeof detectCats3', typeof detectCats3);
console.log('typeof Kittydar3', typeof Kittydar3);
console.log('typeof CONST_ME3', typeof CONST_ME3);
