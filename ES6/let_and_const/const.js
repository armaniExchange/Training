//const MAX_CAT_SIZE_KG = 3000; // 🙀

//MAX_CAT_SIZE_KG = 5000; // SyntaxError
//MAX_CAT_SIZE_KG++; // nice try, but still a SyntaxError

console.log('start');
// const theFairest;  // SyntaxError, you troublemaker
console.log('start2');
const theFairest2 = null;  
console.log('start3');
const theFairest3 = undefined;
console.log('start4');
const theFairest4 = 123;
console.log('start5');
const theFairest5 = 'str';
console.log('start6');
const theFairest6 = function(){console.log('yes');};
console.log('start7');
const theFairest7 = {a:1, b:2};
console.log('before:', theFairest7.a)
console.log('start8');
const theFairest8 = false;
console.log('start9');
const theFairest9 = ['x','y','z'];
console.log('before:', theFairest9[0])
console.log('start10');

theFairest7.a = 111;
theFairest9[0] = 'x1';
console.log('after:', theFairest7.a);
console.log('after:', theFairest9[0])
