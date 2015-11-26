//we can assign a CLASS to a variable or const

const MyClass = class Me {
        getClassName() {
            return Me.name;
        }
};
let inst = new MyClass();
console.log(inst.getClassName()); // Me

//console.log(Me.name); // ReferenceError: Me is not defined
console.log(typeof Me); 

console.log('start');
//let c = new Me();
console.log('start2');
let d = new MyClass();
console.log('start3');
