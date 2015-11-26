import task from './mod1';
import {default as task1} from './mod1';
var task2 = require('./mod1');//ES5 CommonJS

console.log('task-----------');
task();

console.log('task1-----------');
task1();

console.log('task2-----------');
task2();

console.log(task===task2, task2===task1);
