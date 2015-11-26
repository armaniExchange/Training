function f(arg1, arg2, ...rest) {
    console.log(arg1);
    console.log(arg2);
    console.log('rest',rest)
    for(let v of rest){
      console.log(v);
    }
    console.log("You passed " + rest.length + " extra arguments.");
}

f(1,2,3,[4],{},true,7);

function f2(arg1, arg2, ...whatyouwant) {
    console.log(arg1);
    console.log(arg2);
    for(let v of whatyouwant){
      console.log(v);
    }
    console.log("You passed " + whatyouwant.length + " extra arguments.");
}

f2(1,2,3,4,5,6,7);
