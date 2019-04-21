function A(){
    this.name = 'a';
};
B.prototype = new A();
B.prototype.constructor = A;
function B(){
    this.myname = 'b';
}

let b = new B();
console.log(b) 

C.prototype = A;
function C(){
    this.myname = 'c';
}
let c = new C();
console.log(c)